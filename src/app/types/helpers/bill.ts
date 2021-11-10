import { UserObject } from "$types/modules/auth";
import {
  BillCardComponentProps,
  BillObject,
  BillObjectInput,
  BillSubscriberComponentProps,
  BillSubscriberObject,
  BillSubscriberObjectInput,
} from "$types/modules/bill";
import { ContactObjectMap } from "$types/store";


export interface BillCardPropsGeneratorHandlerArgs {
  contactMap: ContactObjectMap;
  loggedInUser: UserObject;
};

export interface BillSubscriberPropsGeneratorHandlerArgs extends BillCardPropsGeneratorHandlerArgs {
  editMode: boolean;
};

export interface GenerateEditableBillHandlerArgs {
  bill: BillObject;
};

export interface GenerateEditableBillSubscriberMapHandlerArgs {
  subscribers: BillSubscriberObject[];
};

export type GenerateBillCardPropsHandler = (bill: BillObject) => BillCardComponentProps;
export type GenerateBillSubscriberPropsHandler = (
  subscriber: BillSubscriberObject | BillSubscriberObjectInput,
) => BillSubscriberComponentProps;
export type BillCardPropsGeneratorHandler = (args: BillCardPropsGeneratorHandlerArgs) => GenerateBillCardPropsHandler;
export type BillSubscriberPropsGeneratorHandler = (args: BillSubscriberPropsGeneratorHandlerArgs) => GenerateBillSubscriberPropsHandler;
export type GenerateEditableBillHandler = (args: GenerateEditableBillHandlerArgs) => BillObjectInput;
export type GenerateEditableBillSubscriberMapHandler = (subscribers: BillSubscriberObject[]) => {
  [id: string]: BillSubscriberObjectInput;
};
