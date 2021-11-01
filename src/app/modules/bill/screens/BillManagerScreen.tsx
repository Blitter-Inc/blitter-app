import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { ActionBar, FloatAddIcon, ListContainer, NotFound, SafeAreaView } from "$components/index";
import { useAppTheme, Styles } from "$config/theme";
import { useAppSelector } from '$store/hooks'
import { BillManagerScreenElement, BillScreenParams } from "$types/modules/bill";
import { BillCard } from "../components";


const useRequiredState = () => {
  return useAppSelector(state => state.cache.bill);
};

const BillManagerScreen: BillManagerScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();
  const billState = useRequiredState();

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
          billState.inStateCount ? (
            <ListContainer style={Styles.ListContainer}>
              {
                billState.orderedSequence.map(billId => (
                  <TouchableOpacity
                    key={billId}
                    onPress={navigateToBillScreen({ billObj: billState.objectMap[billId] })}
                  >
                    <BillCard bill={billState.objectMap[billId]} />
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
