import { EntertainmentIcon, FoodIcon, ShoppingIcon, StatusIcon } from "$components/Icons";
import { IconComponent } from "$types/components";
import {
  BillCardPropsGeneratorHandler,
  BillSubscriberPropsGeneratorHandler,
  GenerateEditableBillHandler,
  GenerateEditableBillSubscriberMapHandler,
} from "$types/helpers";
import { BillType } from "$types/modules/bill";
import { generateDisplayDate } from "./date";


export const generateBillTypeMap = () => {
  return new Map<BillType, { label: string; icon: IconComponent }>([
    [BillType.FOOD, { label: "Food", icon: FoodIcon }],
    [BillType.SHOPPING, { label: "Shopping", icon: ShoppingIcon }],
    [BillType.ENTERTAINMENT, { label: "Entertainment", icon: EntertainmentIcon }],
    [BillType.MISC, { label: "Miscelleneous", icon: StatusIcon }],
  ]);
};

export const billCardPropsGenerator: BillCardPropsGeneratorHandler = ({ contactMap, loggedInUser }) => bill => ({
  name: bill.name,
  type: bill.type.toUpperCase(),
  status: bill.status.toUpperCase(),
  settledAmt: bill.settledAmt ?? "0.00",
  amount: bill.amount,
  subscriberCount: bill.subscribers.length,
  subscriberAvatars: bill.subscribers.slice(0, 2).map(subscriber => ({
    title: contactMap[subscriber.userId].name?.[0] ?? "?",
    uri: contactMap[subscriber.userId].avatar ?? "",
  })),
  createdBy: (bill.createdBy === loggedInUser.id) ? "You" : (contactMap[bill.createdBy].name ?? ""),
  lastUpdatedAt: generateDisplayDate(bill.lastUpdatedAt),
});

export const billSubscriberPropsGenerator: BillSubscriberPropsGeneratorHandler = ({ contactMap, loggedInUser, editMode }) => subscriber => {
  const subscriberProfile = contactMap[subscriber.userId];
  return {
    editMode,
    userId: subscriber.userId,
    name: (subscriber.userId === loggedInUser.id) ? "You" : (subscriberProfile.name ?? ""),
    avatar: subscriberProfile.avatar ?? "",
    amount: subscriber.amount,
    self: subscriber.userId === loggedInUser.id,
    ...('amountPaid' in subscriber ? {
      amountPaid: subscriber.amountPaid,
      fulfilled: subscriber.fulfilled,
    } : {}),
  };
};

export const generateEditableBill: GenerateEditableBillHandler = ({ bill }) => ({
  name: bill.name,
  amount: bill.amount,
  type: bill.type,
  description: bill.description,
  subscribers: bill.subscribers.map(subscriber => ({
    userId: subscriber.userId,
    amount: subscriber.amount,
  })),
  attachments: bill.attachments.map(attachment => ({
    uri: attachment.file,
    name: attachment.name,
    fromState: true,
  })),
});

export const generateEditableBillSubscriberMap: GenerateEditableBillSubscriberMapHandler = (
  subscribers,
) => subscribers.reduce((prev, { userId, amount }) => ({
  ...prev,
  [userId]: { userId, amount },
}), {});
