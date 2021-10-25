import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
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
        {
          state.bills.length ? (
            <ListContainer style={Styles.ListContainer}>
              {
                state.bills.map((billObj, index) => (
                  <TouchableOpacity key={index} onPress={navigateToBillScreen({ billObj })}>
                    <BillCard bill={billObj} />
                  </TouchableOpacity>
                ))
              }
            </ListContainer>
          ) : (
            <NotFound entity="bills" iconColor={ColorPalette.ACCENT} styles={[Styles.ExpandedContainer, Styles.FlexCenteredContainer]} />
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
