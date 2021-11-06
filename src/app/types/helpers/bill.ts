import { UserObject } from "$types/modules/auth";
import { BillCardComponentProps, BillObject, BillSubscriberComponentProps, BillSubscriberObject } from "$types/modules/bill";
import { ContactObjectMap } from "$types/store";


export interface BillCardPropsGeneratorHandlerArgs {
  contactMap: ContactObjectMap;
  user: UserObject;
};

export interface BillSubscriberPropsGeneratorHandlerArgs extends BillCardPropsGeneratorHandlerArgs { };

export type GenerateBillCardPropsHandler = (bill: BillObject) => BillCardComponentProps;
export type GenerateBillSubscriberPropsHandler = (subscriber: BillSubscriberObject) => BillSubscriberComponentProps;
export type BillCardPropsGeneratorHandler = (args: BillCardPropsGeneratorHandlerArgs) => GenerateBillCardPropsHandler;
export type BillSubscriberPropsGeneratorHandler = (args: BillSubscriberPropsGeneratorHandlerArgs) => GenerateBillSubscriberPropsHandler;
