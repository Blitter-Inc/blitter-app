import { StackNavigationOptions } from "@react-navigation/stack";
import { BillScreenParams } from "./modules/bill";


export type RootStackParamList = {
  "Home": undefined;
  "Initialize": undefined;
  "BillNavigator": undefined;
  "AuthNavigator": undefined;
};

export type AuthStackParamList = {
  "SignIn": undefined;
  "OTPVerify": undefined;
  "UpdateProfile": undefined;
};

export type BillStackParamList = {
  "BillManager": undefined;
  "Bill": BillScreenParams;
};

export type RootNavigatorElement = () => JSX.Element;
export type AuthNavigatorElement = () => JSX.Element;
export type BillNavigatorElement = () => JSX.Element;
export type GetNavigatorScreenOptions = (headerPrimaryColor: string, headerAccentColor: string, disableBackButton?: boolean) => StackNavigationOptions;
export type GetBaseScreenOptions = (enableSearch?: boolean) => StackNavigationOptions;
export type GetSlidingScreenOptions = () => StackNavigationOptions;
