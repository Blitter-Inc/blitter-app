import { StackScreenProps } from "@react-navigation/stack";
import { BillStackParamList } from "../../navigation";


export interface BillScreenProps extends StackScreenProps<BillStackParamList, "Bill"> {
  isNew: boolean;
};

export interface BillManagerScreenProps extends StackScreenProps<BillStackParamList, "BillManager"> { };

export type BillScreenElement = (props: BillScreenProps) => JSX.Element;
export type BillManagerScreenElement = (props: BillManagerScreenProps) => JSX.Element;
