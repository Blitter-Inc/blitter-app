import { BillCardPropsGeneratorHandler, BillSubscriberPropsGeneratorHandler, GenerateEditableBillHandler } from "$types/helpers";
import { generateDisplayDate } from "./date";


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

export const billSubscriberPropsGenerator: BillSubscriberPropsGeneratorHandler = ({ contactMap, loggedInUser }) => (subscriber, editable) => {
  const subscriberProfile = contactMap[subscriber.userId];
  return {
    userId: subscriber.userId,
    name: (subscriber.userId === loggedInUser.id) ? "You" : (subscriberProfile.name ?? ""),
    avatar: subscriberProfile.avatar ?? "",
    amount: subscriber.amount,
    self: subscriber.userId === loggedInUser.id,
    ...('amountPaid' in subscriber ? {
      amountPaid: subscriber.amountPaid,
      fulfilled: subscriber.fulfilled,
    } : {}),
    editable,
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
