import { RootStackParamList } from "@d/navigations";
import { StackScreenProps } from "@react-navigation/stack";


export interface HomeScreenProps extends StackScreenProps<RootStackParamList, "Home"> { };

export type HomeScreenElement = (props: HomeScreenProps) => JSX.Element;
