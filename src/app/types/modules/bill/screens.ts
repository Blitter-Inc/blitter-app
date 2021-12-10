import { StackScreenProps } from "@react-navigation/stack";
import { ContactObjectMap } from "$types/store";
import { BillObject } from "./objects";
import { UserObject } from "../auth";
import { BillStackParamList } from "../../navigation";


export enum BillListMode {
  COMPLETE = 'complete',
  SEARCH = 'search',
  SORT = 'sort',
  FILTER = 'filter',
};

export interface BillListProps {
  mode: BillListMode;
  count: number;
  sequence: number[];
};

export interface BillScreenParams {
  contactMap: ContactObjectMap;
  loggedInUser: UserObject;
  billObj?: BillObject;
};

export interface BillScreenProps extends StackScreenProps<BillStackParamList, "Bill"> { };

export interface BillManagerScreenProps extends StackScreenProps<BillStackParamList, "BillManager"> { };

export type BillScreenElement = (props: BillScreenProps) => JSX.Element;
export type BillManagerScreenElement = (props: BillManagerScreenProps) => JSX.Element;
