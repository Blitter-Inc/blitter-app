import { BillObject, BillSubscribers } from "./objects";


export interface BillCardComponentProps {
  bill: BillObject;
}

export interface BillSubscriberProps {
  subscriber: BillSubscribers;
}

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
export type BillSubscribersComponent = (props: BillSubscriberProps) => JSX.Element;
