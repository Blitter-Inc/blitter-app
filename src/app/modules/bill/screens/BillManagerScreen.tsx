import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "$components/index";
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
import { FetchBillsHandlerArgs, FetchBillsOrderingOptions } from "$types/services/api";


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
  const { search } = useContext(SearchContext);
  const generateBillCardProps = billCardPropsGenerator({ contactMap, loggedInUser });

  const [loading, setLoading] = useState(false);
  const [billEffectCounter, setBillEffectCounter] = useState(1);
  const triggerBillEffect = () => {
    setBillEffectCounter(billEffectCounter + 1);
  };
  const [billListProps, setBillListProps] = useState<BillListProps>({
    mode: BillListMode.COMPLETE,
    count: billState.totalCount,
    sequence: billState.orderedSequence,
  });
  const updateBillListProps = (newProps: Partial<BillListProps>) => {
    setBillListProps({ ...billListProps, ...newProps });
  };
  const [billParams, setBillParams] = useState<FetchBillsHandlerArgs>({
    search: '',
    ordering: FetchBillsOrderingOptions.DEFAULT,
  });
  const updateBillParams = (newParams: FetchBillsHandlerArgs) => {
    setBillParams({ ...billParams, ...newParams });
  };

  useEffect(() => {
    if (search !== '') {
      updateBillListProps({ mode: BillListMode.SEARCH });
      updateBillParams({ search });
      triggerBillEffect();
    } else {
      updateBillListProps({
        mode: BillListMode.COMPLETE,
        count: billState.totalCount,
        sequence: billState.orderedSequence,
      });
    }
  }, [search]);

  useEffect(() => {
    if (billListProps.mode !== BillListMode.COMPLETE) {
      setLoading(true);
      const fetch = async () => {
        const { totalCount, orderedSequence } = await fetchBills(billParams);
        updateBillListProps({ count: totalCount, sequence: orderedSequence });
        setLoading(false);
      };
      fetch();
    }
  }, [billEffectCounter]);

  navigation.addListener("gestureStart", () => closeSearchBar());
  const closeSearchBar = () => {
    navigation.setOptions({
      header: undefined,
    });
  };

  const navigateToBillScreen = (params: BillScreenParams = { loggedInUser, contactMap }) => {
    if (params.billObj) {
      params.contactMap = contactMap;
      params.loggedInUser = loggedInUser;
    }
    return () => navigation.push("Bill", params);
  };

  return (
    <TouchableWithoutFeedback onPress={closeSearchBar}>
      <SafeAreaView
        style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
      >
        {
          loading ? (
            <View style={{
              justifyContent: "center",
              alignItems: "center",
            }}>
              <ActivityIndicator animating size={48} />
            </View>
          ) : (
            <>
              <ActionBar
                styles={[Styles.ActionBarContainer, Styles.FlexCenteredContainer]}
                objectCount={billListProps.count}
                objectName="bill"
              />
              {
                billState.inStateCount ? (
                  <ListContainer style={[Styles.ListContainer, { paddingHorizontal: 15 }]}>
                    {
                      billListProps.sequence.map(billId => (
                        <TouchableOpacity
                          key={billId}
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
              <FloatAddIcon
                size={55}
                color={ColorPalette.ACCENT}
                containerStyle={Styles.FloatingIcon}
                onPress={navigateToBillScreen()}
              />
            </>
          )
        }
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
