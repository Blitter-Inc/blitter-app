import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations"
import { UpdateProfileSagaArgs } from "../store";


export interface Profile extends UpdateProfileSagaArgs { };

export interface ProfileScreenProps extends StackScreenProps<RootStackParamList, "UpdateProfile"> { };

export type ProfileScreenElement = (props: ProfileScreenProps) => JSX.Element;
