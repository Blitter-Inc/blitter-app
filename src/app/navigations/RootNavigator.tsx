import React, { FC } from 'react';
import { View } from "react-native";
import { useTheme } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, OTPVerifyScreen, ProfileScreen } from '@screens/auth';
import { HomeScreen } from '@screens/home';
import { useAppSelector } from '@store/hooks';


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    isAuthenticated: authState.credentials.accessToken != null,   // TODO: Replace this by 'authFlowComplete' key in state
  };
}

const Stack = createStackNavigator();

const RootNavigator: FC = () => {
  const { isAuthenticated } = useRequiredState();
  const { theme: { ColorPalette } } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleContainerStyle: {
          paddingLeft: 2,
        },
        headerStyle: {
          backgroundColor: ColorPalette.ACCENT,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20,
        },
        headerLeft: () => {
          if (isAuthenticated) {
            return;
          }
          return (<View />);
        },
      }}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name='Update Profile' component={ProfileScreen} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
        </>
      ) : (
        <>
          <Stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name='OTPVerify' component={OTPVerifyScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Update Profile' component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};


export default RootNavigator;
