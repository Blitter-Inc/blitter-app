import React from "react";
import { NavigationContainer, Theme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useAppTheme } from "$config/theme";
import { AuthNavigator } from "./auth";
import { BillNavigator } from "./bill";
import { HomeScreen } from "./home";
import { useAppSelector } from "$store/hooks";
import { RootNavigatorElement, RootStackParamList } from "$types/navigation";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    isAuthenticated: authState.authFlowComplete,
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

  return (
    <NavigationContainer theme={NavigationTheme}>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false, animation: "flip" }} >
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true, headerTitleAlign: "center" }} />
            <Stack.Screen name="BillNavigator" component={BillNavigator} />
          </>
        ) : (
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default RootNavigator;
