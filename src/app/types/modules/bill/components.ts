import { BillObject, BillSubscriberObject } from "./objects";


export interface BillCardComponentProps {
  bill: BillObject;
}

export interface BillSubscriberProps {
  subscriber: BillSubscriberObject;
}

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
export type BillSubscribersComponent = (props: BillSubscriberProps) => JSX.Element;
