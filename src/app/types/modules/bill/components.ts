import { BillObject } from "./objects";


export interface BillCardComponentProps {
  bill: BillObject;
};

export type BillCardComponent = (props: BillCardComponentProps) => JSX.Element;
