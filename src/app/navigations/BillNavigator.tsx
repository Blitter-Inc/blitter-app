import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppTheme } from "@config/theme";
import { BillNavigatorElement, BillStackParamList } from "@d/navigations";
import { BillManagerScreen } from "@mods/bill";
import { getBaseScreenOptions, getNavigatorScreenOptions } from "./config";


const Stack = createStackNavigator<BillStackParamList>();

const BillNavigator: BillNavigatorElement = () => {
  const ColorPalette = useAppTheme();

  const navigatorScreenOptions = getNavigatorScreenOptions(ColorPalette.PRIMARY, ColorPalette.ACCENT, true);
  const baseScreenOptions = getBaseScreenOptions(true);

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions} >
      <Stack.Screen name="BillManager" component={BillManagerScreen} options={baseScreenOptions} />
    </Stack.Navigator>
  );
};


export default BillNavigator;
