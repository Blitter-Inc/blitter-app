import { StackNavigationOptions, StackScreenProps } from "@react-navigation/stack";


export type RootStackParamList = {
  "Home": undefined,
  "BillNavigator": undefined,
  "SignIn": undefined,
  "OTPVerify": undefined,
  "UpdateProfile": undefined,
};

export type BillStackParamList = {
  "BillManager": undefined,
};

export type BillManagerScreenNavigationProps = StackScreenProps<BillStackParamList, "BillManager">

export type GetNavigatorScreenOptions = (headerPrimaryColor: string, headerAccentColor: string, disableBackButton?: boolean) => StackNavigationOptions;
export type GetBaseScreenOptions = (enableSearch?: boolean) => StackNavigationOptions;
export type GetNestedNavigatorOptions = () => StackNavigationOptions;
