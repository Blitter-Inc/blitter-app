import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, OTPVerifyScreen, SuccessScreen } from '@screens/auth'
import { HomeScreen } from '@screens/home';


const Stack = createStackNavigator();

const RootNavigator = ({ state: { isAuthenticated } }) => (
  <Stack.Navigator>
    {isAuthenticated ? (
      <>
        <Stack.Screen name='Home' component={HomeScreen} />
      </>
    ) : (
      <>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='OTPVerify' component={OTPVerifyScreen} />
        <Stack.Screen name='Success' component={SuccessScreen} />
      </>
    )}
  </Stack.Navigator>
);

const mapStateToProps = state => ({
  state: {
    isAuthenticated: state.auth.credentials.accessToken != null,
  },
});


export default connect(mapStateToProps)(RootNavigator);
