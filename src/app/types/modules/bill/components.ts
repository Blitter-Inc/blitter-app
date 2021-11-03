import { BillSubscriberObject } from "./objects";


export interface BillCardComponentProps {
  name: string;
  type: string;
  status: string;
  settledAmt: string;
  amount: string;
  subscriberCount: number;
  subscriberAvatars: string[];
  createdBy: string;
  lastUpdatedAt: string;
};

export interface BillSubscriberProps {
  subscriber: BillSubscriberObject;
};

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
export type BillSubscribersComponent = (props: BillSubscriberProps) => JSX.Element;
