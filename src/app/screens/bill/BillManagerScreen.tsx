import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "react-native-elements";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "@components/ui";
import { BillManagerScreenNavigationProps } from "@d/navigation";
import { Bill } from "@components/bill";


interface BillManagerScreenProps extends BillManagerScreenNavigationProps { };

export default ({ navigation }: BillManagerScreenProps) => {

  const { theme: { ColorPalette, Styles } } = useTheme();
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
