import { BillObject, BillStatus, BillSubscriberObjectInput, BillType } from "$types/modules/bill";
import { BillState } from "$types/store";
import { PaginatedAPIURLParams, PaginatedResponseAPIObject, TimeMixinAPIObject } from "./shared";


export interface BillSubscriberAPIObject extends TimeMixinAPIObject {
  id: number;
  user: number;
  amount: string;
  amount_paid: string;
  fulfilled: boolean;
};

export interface BillAttachmentAPIObject extends TimeMixinAPIObject {
  id: number;
  name: string;
  file: string;
};

export interface BillAPIObject extends TimeMixinAPIObject {
  id: number;
  name: string;
  type: BillType;
  description: string;
  status: BillStatus;
  amount: string;
  settled_amount: string;
  created_by: number;
  subscribers: BillSubscriberAPIObject[];
  attachments: BillAttachmentAPIObject[];
};

export enum FetchBillsFilterOptions { };

export interface FetchBillsResponseBody extends PaginatedResponseAPIObject<BillAPIObject> { };

export interface FetchBillsHandlerArgs extends PaginatedAPIURLParams<FetchBillsFilterOptions> { };

export interface FetchBillsSerializedResponseBody extends Omit<BillState, "inStateCount" | "lastRefreshed"> { };

export interface CreateBillRequestPayload {
  name: string;
  type: BillType;
  amount: string;
  description: string;
  subscribers?: {
    user: number;
    amount: string;
  }[];
};

export interface CreateBillResponseBody extends Omit<BillAPIObject, "status" | "settled_amount"> { };

export interface CreateBillHandlerArgs extends Omit<CreateBillRequestPayload, "subscribers"> {
  subscribers?: BillSubscriberObjectInput[];
};

export interface CreateBillSerializedResponseBody extends BillObject { };

export interface UpdateBillRequestPayload extends Partial<CreateBillRequestPayload> { };

export interface UpdateBillResponseBody extends CreateBillResponseBody { };

export interface UpdateBillHandlerArgs {
  id: string;
  payload: Partial<CreateBillHandlerArgs>;
};

export interface UpdateBillSerializedResponseBody extends BillObject { };

export type BillObjectSerializer = (
  obj: Omit<BillAPIObject, 'settled_amount' | 'status' | 'attachments'> & Partial<BillAPIObject>,
) => BillObject;
export type FetchBillsResponseSerializer = (body: FetchBillsResponseBody) => FetchBillsSerializedResponseBody;
export type FetchBillsHandler = (args: FetchBillsHandlerArgs) => Promise<FetchBillsSerializedResponseBody>;
export type CreateBillRequestSerializer = (payload: CreateBillHandlerArgs) => CreateBillRequestPayload;
export type CreateBillResponseSerializer = (body: CreateBillResponseBody) => CreateBillSerializedResponseBody;
export type CreateBillHandler = (args: CreateBillHandlerArgs) => Promise<CreateBillSerializedResponseBody>;
export type UpdateBillRequestSerializer = (payload: Partial<CreateBillHandlerArgs>) => UpdateBillRequestPayload;
export type UpdateBillResponseSerializer = (body: UpdateBillResponseBody) => UpdateBillSerializedResponseBody;
export type UpdateBillHandler = (args: UpdateBillHandlerArgs) => Promise<UpdateBillSerializedResponseBody>;
