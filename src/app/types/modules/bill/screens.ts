import { StackScreenProps } from "@react-navigation/stack";
import { ContactObjectMap } from "$types/store";
import { BillObject } from "./objects";
import { User } from "../auth";
import { BillStackParamList } from "../../navigation";


export interface BillScreenParams {
  billObj?: BillObject;
  contactMap?: ContactObjectMap;
  user?: User;
};

export interface BillScreenProps extends StackScreenProps<BillStackParamList, "Bill"> { };

export interface BillManagerScreenProps extends StackScreenProps<BillStackParamList, "BillManager"> { };

export type BillScreenElement = (props: BillScreenProps) => JSX.Element;
export type BillManagerScreenElement = (props: BillManagerScreenProps) => JSX.Element;
