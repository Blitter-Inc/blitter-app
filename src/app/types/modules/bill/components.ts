export interface BillCardComponentProps {
  name: string;
  type: string;
  status: string;
  settledAmt: string;
  amount: string;
  subscriberCount: number;
  subscriberAvatars: {
    title: string;
    uri: string;
  }[];
  createdBy: string;
  lastUpdatedAt: string;
};

export interface BillSubscriberComponentProps {
  userId: number;
  name: string;
  avatar: string;
  amount: string;
  amountPaid?: string;
  fulfilled?: boolean;
  self?: boolean;
  editable: boolean;
};

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
export type BillSubscriberComponent = (props: BillSubscriberComponentProps) => JSX.Element;
