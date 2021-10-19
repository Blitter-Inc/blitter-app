import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppTheme } from "$config/theme";
import { getBaseScreenOptions, getNavigatorScreenOptions, getSlidingScreenOptions } from "$config/navigator";
import { BillNavigatorElement, BillStackParamList } from "$types/navigation";
import { BillScreen, BillManagerScreen } from "./screens";


const Stack = createStackNavigator<BillStackParamList>();

const BillNavigator: BillNavigatorElement = () => {
  const ColorPalette = useAppTheme();

  const navigatorScreenOptions = getNavigatorScreenOptions(ColorPalette.PRIMARY, ColorPalette.ACCENT, true);
  const baseScreenOptions = getBaseScreenOptions(true);

  const slidingScreenOptions = getSlidingScreenOptions();

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions} >
      <Stack.Screen name="BillManager" component={BillManagerScreen} options={baseScreenOptions} />
      <Stack.Screen name="Bill" component={BillScreen} options={slidingScreenOptions} />
    </Stack.Navigator>
  );
};


export default BillNavigator;
