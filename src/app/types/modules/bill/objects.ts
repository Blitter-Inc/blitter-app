export enum BillType {
  DEFAULT = "",
  FOOD = "food",
  SHOPPING = "shopping",
  ENTERTAINMENT = "entertainment",
  OUTING = "outing",
  MISC = "miscelleneous",
};

export enum BillStatus {
  NEW = "new",
  UNSETTLED = "unsettled",
  FULFILLED = "fulfilled",
};

export interface BillSubscriberObject {
  id: number;
  userId: number;
  amount: string;
  amountPaid: string;
  fulfilled: boolean;
};

export interface BillAttachmentObject {
  id: number;
  name: string;
  file: string;
  createdAt: string;
  lastUpdatedAt: string;
};

export interface BillObject {
  id: number;
  name: string;
  amount: string;
  settledAmt: string;
  type: BillType;
  eventName?: string;
  description: string;
  status: BillStatus;
  createdBy: number;
  createdAt: string;
  lastUpdatedAt: string;
  subscribers: BillSubscriberObject[];
  attachments: BillAttachmentObject[];
};

export interface BillSubscriberObjectInput {
  userId: number;
  amount: string;
};

export interface BillAttachmentObjectInput {
  uri: string;
  name?: string;
  type?: string;
  fromState?: boolean;
};

export interface BillObjectInput {
  name: string;
  amount: string;
  type: BillType;
  description: string;
  subscribers: BillSubscriberObjectInput[];
  attachments: BillAttachmentObjectInput[];
};
