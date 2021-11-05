import { BillCardPropsGeneratorHandler, BillSubscriberPropsGeneratorHandler } from "$types/helpers";
import { generateDisplayDate } from "./index";


export const billCardPropsGenerator: BillCardPropsGeneratorHandler = ({ contactMap, user }) => bill => ({
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
  createdBy: (bill.createdBy === user.id) ? "You" : (contactMap[bill.createdBy].name ?? ""),
  lastUpdatedAt: generateDisplayDate(bill.lastUpdatedAt),
});

export const billSubscriberPropsGenerator: BillSubscriberPropsGeneratorHandler = ({ contactMap, user }) => subscriber => {
  const subscriberProfile = contactMap[subscriber.userId];
  return {
    userId: subscriber.userId,
    name: (subscriber.userId === user.id) ? "You" : (subscriberProfile.name ?? ""),
    avatar: subscriberProfile.avatar ?? "",
    amount: subscriber.amount,
    amountPaid: subscriber.amountPaid,
    fulfilled: subscriber.fulfilled,
    self: subscriber.userId === user.id,
  };
};
