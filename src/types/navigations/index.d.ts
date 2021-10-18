import { StackNavigationOptions } from "@react-navigation/stack";


export type RootStackParamList = {
  "Home": undefined,
  "BillNavigator": undefined,
  "SignIn": undefined,
  "OTPVerify": undefined,
  "UpdateProfile": undefined,
};

export type BillStackParamList = {
  "BillManager": undefined,
  "Bill": undefined,
};

export type RootNavigatorElement = () => JSX.Element;
export type BillNavigatorElement = () => JSX.Element;
export type GetNavigatorScreenOptions = (headerPrimaryColor: string, headerAccentColor: string, disableBackButton?: boolean) => StackNavigationOptions;
export type GetBaseScreenOptions = (enableSearch?: boolean) => StackNavigationOptions;
export type GetNestedNavigatorOptions = () => StackNavigationOptions;
