import { User } from "../auth";


export enum BillType {
  FOOD = "food",
  SHOPPING = "shopping",
  MISC = "miscelleneous",
};

export enum BillStatus {
  PENDING = "pending",
  FULFILLED = "fulfilled",
};

export interface BillObject {
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
  subscribers: User[];
  attachments: any[];
};
