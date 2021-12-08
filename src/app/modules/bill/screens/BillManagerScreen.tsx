import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "$components/index";
import { useAppTheme, Styles } from "$config/theme";
import { billCardPropsGenerator } from "$helpers/bill";
import { useAppSelector } from '$store/hooks'
import { BillManagerScreenElement, BillScreenParams } from "$types/modules/bill";
import { BillCard } from "../components";


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

  const generateBillCardProps = billCardPropsGenerator({ contactMap, loggedInUser });

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
        <ActionBar styles={[Styles.ActionBarContainer, Styles.FlexCenteredContainer]} />
        {
          billState.inStateCount ? (
            <ListContainer style={[Styles.ListContainer, { paddingHorizontal: 15 }]}>
              {
                billState.orderedSequence.map(billId => (
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
