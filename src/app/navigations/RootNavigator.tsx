import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useAppTheme } from "@config/theme";
import { RootNavigatorElement, RootStackParamList } from "@d/navigations";
import { SignInScreen, OTPVerifyScreen, ProfileScreen } from "@mods/auth";
import { HomeScreen } from "@mods/home";
import { useAppSelector } from "@store/hooks";
import BillNavigator from "./BillNavigator";
import { getNavigatorScreenOptions, getNestedNavigatorOptions } from "./config";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    isAuthenticated: authState.authFlowComplete,
  };
}

const Stack = createStackNavigator<RootStackParamList>();

const authScreenOptions = { headerShown: false };

const RootNavigator: RootNavigatorElement = () => {
  const ColorPalette = useAppTheme();

  const NavigationTheme: Theme = {
    dark: false,
    colors: {
      primary: ColorPalette.PRIMARY,
      background: ColorPalette.PRIMARY,
      card: ColorPalette.ACCENT,
      text: ColorPalette.FONT.TEXT,
      border: 'rgb(199, 199, 204)',
      notification: ColorPalette.PRIMARY,
    },
  };

  const { isAuthenticated } = useRequiredState();
  const navigatorScreenOptions = getNavigatorScreenOptions(ColorPalette.PRIMARY, ColorPalette.ACCENT, isAuthenticated);
  const nestedNavigatorOptions = getNestedNavigatorOptions();

  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={navigatorScreenOptions} >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitleAlign: "center" }} />
            <Stack.Screen name="BillNavigator" component={BillNavigator} options={nestedNavigatorOptions} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} options={authScreenOptions} />
            <Stack.Screen name="OTPVerify" component={OTPVerifyScreen} options={authScreenOptions} />
            <Stack.Screen name="UpdateProfile" component={ProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator;
