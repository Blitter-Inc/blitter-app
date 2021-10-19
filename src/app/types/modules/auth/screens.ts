import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation"


export interface ProfileScreenProps extends StackScreenProps<AuthStackParamList, "UpdateProfile"> { };

export type ProfileScreenElement = (props: ProfileScreenProps) => JSX.Element;
