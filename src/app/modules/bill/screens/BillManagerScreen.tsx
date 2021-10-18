import React, { useState } from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "@components/index";
import { BillForm, BillCard } from "../components";
import { useAppSelector } from '@store/hooks'
import { BillManagerScreenElement } from "@d/modules/bill";
import { useAppTheme, Styles } from "@config/theme";


const useRequiredState = () => {
  const billState = useAppSelector(state => state.bill)
  return {
    bills: billState.bills
  }
}
const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();
  const state = useRequiredState();
  
  const [addBillVisible, setAddBillVisible] = useState(false);
  
  navigation.addListener("gestureStart", () => closeSearchBar());
  
  const closeSearchBar = () => {
    navigation.setOptions({
      header: undefined,
    });
  };
  
  const toggleAddBill = () => {
    setAddBillVisible(!addBillVisible);
  };
  
  return (
    <TouchableWithoutFeedback onPress={closeSearchBar}>
      <SafeAreaView
        style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]}
      >
        <ActionBar styles={[Styles.ActionBarContainer, Styles.FlexCenteredContainer]} />
        <ListContainer styles={[Styles.ListContainer]}>
          {
            state.bills.length ? (
              <ScrollView>
                {state.bills.map((bill, index) => <BillCard key={index} bill={bill} />)}
              </ScrollView>
            ) : (
              <NotFound entity="bills" iconColor={ColorPalette.ACCENT} styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]} />
            )
          }
        </ListContainer>
        <FloatAddIcon color={ColorPalette.ACCENT} styles={Styles.FloatingIcon} onPress={toggleAddBill} />
        <BillForm isNew={false} overlayProps={{ isVisible: addBillVisible, onBackdropPress: toggleAddBill }} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
