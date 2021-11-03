import { User } from "$types/modules/auth";
import { BillCardComponentProps, BillObject } from "$types/modules/bill";
import { ContactObjectMap } from "$types/store";


export interface BillCardPropsGeneratorHandlerArgs {
  contactMap: ContactObjectMap;
  user: User;
};

export type BillCardPropsGeneratorHandler = (args: BillCardPropsGeneratorHandlerArgs) => (bill: BillObject) => BillCardComponentProps;
