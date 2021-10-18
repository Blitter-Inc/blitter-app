import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "@components/index";
import { BillManagerScreenElement } from "@d/modules/bill";
import { Bill } from "../components";
import { useAppTheme, Styles } from "@config/theme";


const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();

  const [bills, setBills] = useState([]);
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
            bills.length ? (
              bills.map(() => { })   // TODO: Rendering BillCard Component
            ) : (
              <NotFound entity="bills" iconColor={ColorPalette.ACCENT} styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]} />
            )
          }
        </ListContainer>
        <FloatAddIcon color={ColorPalette.ACCENT} styles={Styles.FloatingIcon} onPress={toggleAddBill} />
        <Bill isNew={false} overlayProps={{ isVisible: addBillVisible, onBackdropPress: toggleAddBill }} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
