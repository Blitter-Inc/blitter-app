import { StackScreenProps } from "@react-navigation/stack";
import { BillObject } from "./objects";
import { BillStackParamList } from "../../navigation";


export interface BillScreenParams {
  billObj?: BillObject;
};

export interface BillScreenProps extends StackScreenProps<BillStackParamList, "Bill"> { };

export interface BillManagerScreenProps extends StackScreenProps<BillStackParamList, "BillManager"> { };

export type BillScreenElement = (props: BillScreenProps) => JSX.Element;
export type BillManagerScreenElement = (props: BillManagerScreenProps) => JSX.Element;
