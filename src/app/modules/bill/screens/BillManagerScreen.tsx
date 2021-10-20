import React from "react";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "$components/index";
import { useAppTheme, Styles } from "$config/theme";
import { useAppSelector } from '$store/hooks'
import { BillManagerScreenElement, BillScreenParams } from "$types/modules/bill";
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

  const navigateToBillScreen = (params: BillScreenParams = {}) => {
    return () => navigation.push("Bill", params);
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
                {state.bills.map((billObj, index) => (
                  <TouchableOpacity key={index} onPress={navigateToBillScreen({ billObj })}>
                    <BillCard bill={billObj} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            ) : (
              <NotFound entity="bills" iconColor={ColorPalette.ACCENT} styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]} />
            )
          }
        </ListContainer>
        <FloatAddIcon
          color={ColorPalette.ACCENT}
          styles={Styles.FloatingIcon}
          onPress={navigateToBillScreen()}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};


export default BillManagerScreen;
