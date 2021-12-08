import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation"


export interface SignInScreenProps extends StackScreenProps<AuthStackParamList, "SignIn"> { };
export interface OTPVerifyScreenProps extends StackScreenProps<AuthStackParamList, "OTPVerify"> { };
export interface ProfileScreenProps extends StackScreenProps<AuthStackParamList, "UpdateProfile"> { };

export type SignInScreenElement = (props: SignInScreenProps) => JSX.Element;
export type OTPVerifyScreenElement = (props: OTPVerifyScreenProps) => JSX.Element;
export type ProfileScreenElement = (props: ProfileScreenProps) => JSX.Element;
