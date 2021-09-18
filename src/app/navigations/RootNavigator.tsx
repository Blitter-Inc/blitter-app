import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, OTPVerifyScreen } from '@screens/auth';
import { HomeScreen } from '@screens/home';
import { useAppSelector } from '@store/hooks';


const fetchRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    isAuthenticated: authState.credentials.accessToken != null,
  };
}

const Stack = createStackNavigator();

const RootNavigator: FC = () => {
  const { isAuthenticated } = fetchRequiredState();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name='Home' component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='OTPVerify' component={OTPVerifyScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};


export default RootNavigator;
