import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthNavigatorElement, AuthStackParamList } from "$types/navigation";
import { SignInScreen, OTPVerifyScreen, ProfileScreen } from "./screens";


const Stack = createNativeStackNavigator<AuthStackParamList>();
const authScreenOptions = { headerShown: false };

const AuthNavigator: AuthNavigatorElement = () => (
  <Stack.Navigator screenOptions={{ animation: "slide_from_right", headerShadowVisible: false }}>
    <Stack.Screen name="SignIn" component={SignInScreen} options={authScreenOptions} />
    <Stack.Screen name="OTPVerify" component={OTPVerifyScreen} options={authScreenOptions} />
    <Stack.Screen name="UpdateProfile" component={ProfileScreen} options={{ title: "Update Profile" }} />
  </Stack.Navigator>
);


export default AuthNavigator;
