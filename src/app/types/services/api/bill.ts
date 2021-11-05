import { BillStatus, BillType } from "$types/modules/bill";
import { BillState } from "$types/store";
import { PaginatedAPIURLParams, PaginatedResponseAPIObject, TimeMixinAPIObject } from "./shared";


export interface BillSubscriberAPIObject extends TimeMixinAPIObject {
  id: number;
  user_id: number;
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
  created_at: string;
  updated_at: string;
  subscribers: BillSubscriberAPIObject[];
  attachments: BillAttachmentAPIObject[];
};

export enum FetchBillsOrderingOptions {
  DEFAULT = "-updated_at",
  NAME_ASC = "name",
  NAME_DEC = "-name",
  TYPE_ASC = "type",
  TYPE_DEC = "-type",
  CREATED_AT_ASC = "created_at",
  CREATED_AT_DEC = "-created_at",
  AMOUNT_ASC = "amount",
  AMOUNT_DEC = "-amount",
  CREATED_BY_NAME_ASC = "created_by__name",
  CREATED_BY_NAME_DEC = "-created_by__name",
  UPDATED_AT_ASC = "updated_at",
  UPDATED_AT_DEC = "-updated_at",
};

export enum FetchBillsFilterOptions { };

export interface FetchBillsResponseBody extends PaginatedResponseAPIObject<FetchBillsOrderingOptions, BillAPIObject> { };

export interface FetchBillsHandlerArgs extends PaginatedAPIURLParams<
  FetchBillsOrderingOptions,
  FetchBillsFilterOptions
> { };
 
export interface FetchBillsSerializedResponseBody extends Omit<BillState, "inStateCount" | "lastRefreshed"> { };

export type FetchBillsResponseSerializer = (body: FetchBillsResponseBody) => FetchBillsSerializedResponseBody;
export type FetchBillsHandler = (args: FetchBillsHandlerArgs) => Promise<FetchBillsSerializedResponseBody>;
