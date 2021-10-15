import React, { FC } from "react";
import { useTheme } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { BillManagerScreen } from "@mods/bill";
import { BillStackParamList } from "@d/navigation";
import { getBaseScreenOptions, getNavigatorScreenOptions } from "./config";


const Stack = createStackNavigator<BillStackParamList>();

const BillNavigator: FC = () => {
  const { theme: { ColorPalette } } = useTheme();
  const navigatorScreenOptions = getNavigatorScreenOptions(ColorPalette.PRIMARY, ColorPalette.ACCENT, true);
  const baseScreenOptions = getBaseScreenOptions(true);

  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions} >
      <Stack.Screen name="BillManager" component={BillManagerScreen} options={baseScreenOptions} />
    </Stack.Navigator>
  );
};


export default BillNavigator;
