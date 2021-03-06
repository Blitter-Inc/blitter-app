import { useState, useContext, useRef, useCallback, useMemo } from "react";
import { SearchContext } from "$config/context";
import { billCardPropsGenerator } from "$helpers/bill";
import { fetchBills as fetchBillService } from "$services/api";
import { useAppSelector } from '$store/hooks'
import {
  BillType,
  BillListMode,
  BillListProps,
} from "$types/modules/bill";
import { FetchBillsHandlerArgs, FetchAPIOrderingOptions } from "$types/services/api";
import { FilterType } from "$types/modules/shared";
import { ActionBarContextObject, FilterContextData, FilterStateObject, SortContextData } from "$types/config/context";


const useRequiredState = () => {
  const {
    auth: { credentials: { user: loggedInUser } },
    cache: { contact: { objectMap: contactMap }, bill: billState },
  } = useAppSelector(state => state);
  return { loggedInUser, contactMap, billState };
};

const useBillManagerState = () => {
  const { loggedInUser, billState, contactMap } = useRequiredState();
  const generateBillCardProps = useMemo(
    () => billCardPropsGenerator({ contactMap, loggedInUser }),
    [contactMap, loggedInUser],
  );

  // BILL LIST PROPS
  const initialBillListProps = useMemo<BillListProps>(() => {
    return {
      mode: BillListMode.COMPLETE,
      count: billState.totalCount,
      sequence: billState.orderedSequence,
    };
  }, [billState]);
  const [billListProps, setBillListProps] = useState(initialBillListProps);
  const updateBillListProps = useCallback((newProps: Partial<BillListProps>, currentProps: BillListProps) => {
    setBillListProps({ ...currentProps, ...newProps });
  }, []);
  const resetBillListProps = () => {
    setBillListProps(initialBillListProps);
  };

  // BILL EFFECT COUNTER
  const [billEffectCounter, setBillEffectCounter] = useState(1);
  const triggerBillEffect = useCallback(() => {
    setBillEffectCounter(billEffectCounter + 1);
  }, [billEffectCounter]);

  const initialized = useRef(false);
  const [loading, setLoading] = useState(false);

  // BILL PARAMS
  const initialBillParams = useMemo<FetchBillsHandlerArgs>(() => ({
    search: '',
    ordering: FetchAPIOrderingOptions.DEFAULT,
  }), []);
  const [billParams, setBillParams] = useState(initialBillParams);
  const updateBillParams = (newParams: FetchBillsHandlerArgs) => {
    setBillParams({ ...billParams, ...newParams });
  };
  const resetBillParams = () => {
    setBillParams(initialBillParams);
  };

  const fetchBills = useCallback(async (billParams: FetchBillsHandlerArgs) => {
    setLoading(true);
    const { totalCount, orderedSequence } = await fetchBillService(billParams);
    updateBillListProps({ count: totalCount, sequence: orderedSequence }, billListProps);
    setLoading(false);
  }, []);


  const { search, setSearch } = useContext(SearchContext);
  const generateInitialFilterState = useCallback<() => FilterStateObject>(() => ({
    type: {
      active: false,
      data: new Set(),
    },
    fulfilled: {
      active: false,
      data: false,
    },
  }), []);
  const filterState = useState(generateInitialFilterState());
  const initialFilterStatus = useMemo(() => ({
    active: false,
    refreshCounter: 0,
  }), []);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const activateFilters = () => setFilterStatus({
    ...filterStatus,
    active: true,
  });
  const refreshFilters = () => setFilterStatus({
    ...filterStatus,
    refreshCounter: filterStatus.refreshCounter + 1,
  });
  const resetFilters = () => {
    filterState[1](generateInitialFilterState());
    setFilterStatus(initialFilterStatus);
  };
  const filterContextData: FilterContextData = {
    status: filterStatus,
    activate: activateFilters,
    refresh: refreshFilters,
    reset: resetFilters,
    filters: [
      {
        name: "type",
        type: FilterType.SET,
      },
      {
        name: "fulfilled",
        type: FilterType.TOGGLE,
      },
    ],
    renderOptions: {
      type: Object.values(BillType).slice(1),
    },
    state: filterState,
  };

  const [reverseOrderingEnabled, setReverseOrderingEnabled] = useState(false);
  const toggleOrdering = useCallback(() => {
    setReverseOrderingEnabled(!reverseOrderingEnabled);
    console.log(billListProps.sequence);
    updateBillListProps({ sequence: [...billListProps.sequence].reverse() }, billListProps);
  }, [reverseOrderingEnabled]);
  const sortContextData: SortContextData = { reverseOrderingEnabled, toggleOrdering };

  const actionBarContextValue: ActionBarContextObject = {
    filter: filterContextData,
    sort: sortContextData,
  };

  return {
    search,
    setSearch,
    actionBarContextValue,
    loggedInUser,
    billState,
    contactMap,
    generateBillCardProps,

    initialized,
    loading,
    setLoading,

    billEffectCounter,
    triggerBillEffect,

    billListProps,
    updateBillListProps,
    resetBillListProps,

    billParams,
    updateBillParams,
    resetBillParams,

    fetchBills,
  };
};


export default useBillManagerState;
