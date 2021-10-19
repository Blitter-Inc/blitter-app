import React from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "$components/index";
import { useAppTheme, Styles } from "$config/theme";
import { useAppSelector } from '$store/hooks'
import { BillManagerScreenElement } from "$types/modules/bill";
import { BillCard } from "../components";


const useRequiredState = () => {
  const { bills } = useAppSelector(state => state.cache);
  return { bills };
};

const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();
  const state = useRequiredState();

  navigation.addListener("gestureStart", () => closeSearchBar());

  const closeSearchBar = () => {
    navigation.setOptions({
      header: undefined,
    });
  };

  const openAddBill = () => {
    navigation.push("Bill", { isNew: true });
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
        <FloatAddIcon color={ColorPalette.ACCENT} styles={Styles.FloatingIcon} onPress={openAddBill} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
