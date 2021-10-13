import { OverlayProps } from "react-native-elements";


export interface BillComponentProps {
  isNew: boolean;
  overlayProps?: OverlayProps;
};

export type BillComponent = (props: BillComponentProps) => JSX.Element;

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
