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

export interface BillObject {
  id: number;
  name: string;
  amount: string;
  settledAmt: string;
  type: BillType;
  eventName: string;
  description: string;
  status: BillStatus;
  createdBy: string;
  createdAt: string;
  lastUpdatedAt: string;
  subscribers: BillSubscribers[];
  attachments: any[];
};

export interface BillSubscribers {
  id: number;
  name: string;
  avatar: string;
  splitAmt: string;
  paidAmt: string
}
