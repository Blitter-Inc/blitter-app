import { BillCardPropsGeneratorHandler } from "$types/helpers";
import { generateDisplayDate } from "./index";


export const billCardPropsGenerator: BillCardPropsGeneratorHandler = ({ contactMap, user }) => bill => ({
  name: bill.name,
  type: bill.type.toUpperCase(),
  status: bill.status.toUpperCase(),
  settledAmt: bill.settledAmt ?? "0.00",
  amount: bill.amount,
  subscriberCount: bill.subscribers.length,
  subscriberAvatars: bill.subscribers.slice(0, 2).map(subscriber => contactMap[subscriber.userId].avatar ?? ""),
  createdBy: (bill.createdBy === user.id) ? "You" : (contactMap[bill.createdBy].name ?? ""),
  lastUpdatedAt: generateDisplayDate(bill.lastUpdatedAt),
});
