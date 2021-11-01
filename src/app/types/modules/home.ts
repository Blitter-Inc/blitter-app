import { RootStackParamList } from "$types/navigation";
import { StackScreenProps } from "@react-navigation/stack";


export interface HomeScreenProps extends StackScreenProps<RootStackParamList, "Home"> { };
export interface InitializeScreenProps extends StackScreenProps<RootStackParamList, "Initialize"> { };

export type HomeScreenElement = (props: HomeScreenProps) => JSX.Element;
export type InitializeScreenElement = (props: InitializeScreenProps) => JSX.Element;
