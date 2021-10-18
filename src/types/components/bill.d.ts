import { Bill } from "@d/store";
import { OverlayProps } from "react-native-elements";

export interface BillComponentProps {
  isNew: boolean;
  overlayProps?: OverlayProps;
}

export interface BillCardComponentProps {
  bill: Bill;
 }

export type BillComponent = (props: BillComponentProps) => JSX.Element;

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
