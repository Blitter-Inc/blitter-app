import React, { useState, useEffect, useContext, useRef } from "react";
import { ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ActionBar, ListContainer, NotFound, SafeAreaView } from "$components/index";
import { SearchContext } from "$config/context";
import { useAppTheme, Styles } from "$config/theme";
import { billCardPropsGenerator } from "$helpers/bill";
import { fetchBills } from "$services/api";
import { useAppSelector } from '$store/hooks'
import {
  BillListMode,
  BillListProps,
  BillManagerScreenElement,
  BillScreenParams,
} from "$types/modules/bill";
import { BillCard } from "../components";
import { FetchBillsHandlerArgs, FetchAPIOrderingOptions } from "$types/services/api";


const useRequiredState = () => {
  const {
    auth: { credentials: { user: loggedInUser } },
    cache: { contact: { objectMap: contactMap }, bill: billState },
  } = useAppSelector(state => state);
  return { loggedInUser, contactMap, billState };
};

const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();
  const { loggedInUser, billState, contactMap } = useRequiredState();
  const { search, setSearch } = useContext(SearchContext);
  const generateBillCardProps = billCardPropsGenerator({ contactMap, loggedInUser });

  const initialized = useRef(false);
  const sortState = useState(false);
  const [loading, setLoading] = useState(false);
  const [billEffectCounter, setBillEffectCounter] = useState(1);
  const triggerBillEffect = () => {
    setBillEffectCounter(billEffectCounter + 1);
  };

  const generateInitialBillListProps = (): BillListProps => ({
    mode: BillListMode.COMPLETE,
    count: billState.totalCount,
    sequence: billState.orderedSequence,
  });
  const [billListProps, setBillListProps] = useState(generateInitialBillListProps());
  const updateBillListProps = (newProps: Partial<BillListProps>) => {
    setBillListProps({ ...billListProps, ...newProps });
  };
  const initialBillParams: FetchBillsHandlerArgs = {
    search: '',
    ordering: FetchAPIOrderingOptions.DEFAULT,
  };
  const [billParams, setBillParams] = useState(initialBillParams);
  const updateBillParams = (newParams: FetchBillsHandlerArgs) => {
    setBillParams({ ...billParams, ...newParams });
  };
  const toggleSortOrder = () => {
    updateBillParams({
      ordering: billParams.ordering === FetchAPIOrderingOptions.DEFAULT ?
        FetchAPIOrderingOptions.REVERSE :
        FetchAPIOrderingOptions.DEFAULT,
    });
  };

  const fetch = async (billParams: FetchBillsHandlerArgs) => {
    setLoading(true);
    const { totalCount, orderedSequence } = await fetchBills(billParams);
    updateBillListProps({ count: totalCount, sequence: orderedSequence });
    setLoading(false);
  };

  useEffect(() => {
    // Enables re-rendering screen upon adding bill
    setBillListProps(generateInitialBillListProps());
  }, [billState.totalCount]);

  useEffect(() => {
    if (!initialized.current) {
      // Prevents updating state on first render
      initialized.current = true;
      return;
    }
    if (search !== '') {
      // Update params for search query and trigger fetch bills effect
      updateBillListProps({ mode: BillListMode.SEARCH });
      updateBillParams({ search });
      triggerBillEffect();
    } else {
      // Disposes search state
      updateBillListProps(generateInitialBillListProps());
      updateBillParams({
        ordering: FetchAPIOrderingOptions.DEFAULT,
      });
      sortState[1](false);
    }
  }, [search]);

  useEffect(() => {
    // Fetches bills for search and filter query
    if (billListProps.mode !== BillListMode.COMPLETE) {
      fetch(billParams);
    }
  }, [billEffectCounter]);

  useFocusEffect(() => {
    navigation.addListener("gestureStart", () => closeSearchBar());
    navigation.addListener("beforeRemove", () => setSearch(''));
  });

  const closeSearchBar = () => {
    if (search === '') {
      navigation.setOptions({
        header: undefined,
      });
    }
  };

  const navigateToBillScreen = (params: BillScreenParams = { loggedInUser, contactMap }) => {
    if (params.billObj) {
      params.contactMap = contactMap;
      params.loggedInUser = loggedInUser;
    }
    return () => navigation.push("Bill", params);
  };

  const sortBillsHandler = async () => {
    toggleSortOrder();
    updateBillListProps({ sequence: billListProps.sequence.reverse() });
  };

  return (
    <TouchableWithoutFeedback onPress={closeSearchBar}>
      <SafeAreaView
        style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
      >
        {
          loading ? <ActivityIndicator animating size={48} color={ColorPalette.ACCENT} /> : (
            <>
              <ActionBar
                styles={[Styles.ActionBarContainer, Styles.FlexCenteredContainer]}
                addBtnHandler={navigateToBillScreen()}
                sortState={sortState}
                sortHandler={sortBillsHandler}
              />
              {
                billState.inStateCount ? (
                  <ListContainer style={[Styles.ListContainer]}>
                    {
                      billListProps.sequence.map(billId => (
                        <TouchableOpacity
                          key={billId}
                          activeOpacity={0.75}
                          onPressIn={closeSearchBar}
                          onPress={navigateToBillScreen({ billObj: billState.objectMap[billId], contactMap, loggedInUser })}
                        >
                          <BillCard {...generateBillCardProps(billState.objectMap[billId])} />
                        </TouchableOpacity>
                      ))
                    }
                  </ListContainer>
                ) : (
                  <NotFound
                    entity="bills"
                    iconColor={ColorPalette.ACCENT}
                    styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
                  />
                )
              }
              {/* <FloatAddIcon
                size={40}
                color="white"
                iconStyle={{ backgroundColor: ColorPalette.ACCENT, padding: 8 }}
                containerStyle={Styles.FloatingIcon}
                onPress={navigateToBillScreen()}
              /> */}
            </>
          )
        }
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
