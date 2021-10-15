import React, { FC } from "react";
import { useTheme } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, OTPVerifyScreen, ProfileScreen } from "@mods/auth";
import { HomeScreen } from "@mods/home";
import { useAppSelector } from "@store/hooks";
import { RootStackParamList } from "@d/navigation";
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

const RootNavigator: FC = () => {
  const { isAuthenticated } = useRequiredState();
  const { theme: { ColorPalette } } = useTheme();
  const navigatorScreenOptions = getNavigatorScreenOptions(ColorPalette.PRIMARY, ColorPalette.ACCENT, isAuthenticated);
  const nestedNavigatorOptions = getNestedNavigatorOptions();

  return (
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
  );
};


export default RootNavigator;
