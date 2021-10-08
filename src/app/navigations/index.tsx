import React from "react";
import { useTheme } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, Theme } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";


export default () => {
  const { theme: { ColorPalette } } = useTheme();

  const NavigationTheme: Theme = {
    dark: false,
    colors: {
      primary: ColorPalette.PRIMARY,
      background: ColorPalette.ACCENT,
      card: ColorPalette.ACCENT,
      text: ColorPalette.FONT.TEXT,
      border: 'rgb(199, 199, 204)',
      notification: ColorPalette.PRIMARY,
    },
  };

  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  );
};
