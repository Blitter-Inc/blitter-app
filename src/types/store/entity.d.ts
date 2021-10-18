export interface UserProfile {
  id: number;
  name: string;
  email?: string;
  bio?: string;
  avatar?: string;
};

export interface User extends Partial<UserProfile> {
  phoneNumber: string;
  dateJoined: string;
};

export enum BillTypes {
  Food = "food",
  SHOPPING = "shopping",
  MISC = "miscelleneous",
}

export enum BillStatus {
  PENDING = "pending",
  FULFILLED = "fulfilled",
}

export interface Bill {
  name: string;
  amount: number;
  settledAmt: number;
  type: BillTypes;
  eventName: string;
  description: string;
  status: BillStatus;
  created: string;
  lastUpdated: string;
  subscribers: User[];
  attachments: any[];
};
