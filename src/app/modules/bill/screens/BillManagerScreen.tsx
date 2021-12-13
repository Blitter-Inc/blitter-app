import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ActionBar, NotFound, SafeAreaView } from "$components/index";
import { FilterContext } from "$config/context";
import { useAppTheme, Styles } from "$config/theme";
import {
  BillListMode,
  BillManagerScreenElement,
  BillScreenParams,
  BillStatus,
} from "$types/modules/bill";
import { FetchAPIOrderingOptions } from "$types/services/api";
import { BillCard } from "../components";
import { useBillManagerState } from "../hooks/bill-manager";


const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();
  const {
    search,
    setSearch,
    filterContextData,
    loggedInUser,
    billState,
    contactMap,
    generateBillCardProps,
    initialized,
    sortState,
    loading,
    billEffectCounter,
    triggerBillEffect,
    billListProps,
    updateBillListProps,
    resetBillListProps,
    billParams,
    updateBillParams,
    toggleSortOrder,
    fetchBills,
  } = useBillManagerState();

  useEffect(() => {
    // Enables re-rendering screen upon adding bill
    resetBillListProps();
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
      resetBillListProps();
      updateBillParams({
        ordering: FetchAPIOrderingOptions.DEFAULT,
      });
      sortState[1](false);
    }
  }, [search]);

  useEffect(() => {
    // Fetches bills for search and filter query
    if (billListProps.mode !== BillListMode.COMPLETE) {
      fetchBills(billParams);
    }
  }, [billEffectCounter]);

  useFocusEffect(() => {
    navigation.addListener("gestureStart", () => closeSearchBar());
    navigation.addListener("beforeRemove", () => {
      setSearch('');
    });
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

  useEffect(() => {
    if (filterContextData.status.active) {
      updateBillListProps({
        sequence: billState.orderedSequence.filter(billFilter),
      });
    } else {
      resetBillListProps();
    }
  }, [filterContextData.status]);

  const billFilter = (billId: number) => {
    const filterStateData = filterContextData.state[0];
    if (filterStateData.fulfilled.active && (
      (filterStateData.fulfilled.data === true && billState.objectMap[billId].status !== BillStatus.FULFILLED) ||
      (filterStateData.fulfilled.data === false && billState.objectMap[billId].status === BillStatus.FULFILLED)
    )) return false;
    if (filterStateData.type.active && !(filterStateData.type.data.has(billState.objectMap[billId].type)))
      return false;
    return true;
  };

  return (
    <FilterContext.Provider value={filterContextData}>
      <SafeAreaView
        style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
      >
        {
          loading ? <ActivityIndicator animating size={48} color={ColorPalette.ACCENT} /> : (
            <>
              <ActionBar
                containerStyle={{ ...Styles.ActionBarContainer, ...Styles.FlexCenteredContainer }}
                addBtnHandler={navigateToBillScreen()}
                sortState={sortState}
                sortHandler={sortBillsHandler}
              />
              {
                billListProps.count ? (
                  <FlatList
                    style={[Styles.ListContainer, { paddingHorizontal: 15 }]}
                    data={billListProps.sequence}
                    renderItem={({ item: billId }) => (
                      <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={navigateToBillScreen({ billObj: billState.objectMap[billId], contactMap, loggedInUser })}
                      >
                        <BillCard {...generateBillCardProps(billState.objectMap[billId])} />
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, _) => String(item)}
                    onTouchStart={closeSearchBar}
                  />
                ) : (
                  <NotFound
                    entity="bills"
                    iconColor={ColorPalette.ACCENT}
                    styles={[Styles.ListContainer, Styles.FlexCenteredContainer]}
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
    </FilterContext.Provider>
  );
};


export default BillManagerScreen;
