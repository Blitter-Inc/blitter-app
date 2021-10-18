import { BillStackParamList } from "../navigations";
import { StackScreenProps } from "@react-navigation/stack";


export interface BillModel {
  name: string;
  amount: string;
  type: string;
  eventName: string;
  description: string;
  status: string;
  created: string;
  lastUpdated: string;
  subscribers: any[];
  attachments: any[];
};

export interface BillScreenProps extends StackScreenProps<BillStackParamList, "Bill"> {
  isNew: boolean;
};

export interface BillManagerScreenProps extends StackScreenProps<BillStackParamList, "BillManager"> { };

export type BillScreenElement = (props: BillScreenProps) => JSX.Element;
export type BillManagerScreenElement = (props: BillManagerScreenProps) => JSX.Element;
