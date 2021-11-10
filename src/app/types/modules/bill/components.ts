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
  self: boolean;
  editMode: boolean;
  amountPaid?: string;
  fulfilled?: boolean;
  updateAmount?: (amount: string) => void;
};

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
export type BillSubscriberComponent = (props: BillSubscriberComponentProps) => JSX.Element;
