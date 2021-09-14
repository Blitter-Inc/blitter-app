import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen, OTPVerifyScreen, SuccessScreen } from '@screens/auth'


const Stack = createStackNavigator();


export default () => (
  <Stack.Navigator>
    <Stack.Screen name='SignIn' component={SignInScreen} />
    <Stack.Screen name='OTPVerify' component={OTPVerifyScreen} />
    <Stack.Screen name='Success' component={SuccessScreen} />
  </Stack.Navigator>
);
