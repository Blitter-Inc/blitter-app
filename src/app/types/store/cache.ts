import { Action, AnyAction } from "@reduxjs/toolkit";
import { FetchBillsOrderingOptions, FetchBillsSerializedResponseBody } from "$types/services/api/bill";
import { PayloadAction, Reducer } from "./abstract";
import { BillObject } from "../modules/bill";


export interface BillState {
  lastRefreshed: string;
  totalCount: number;
  inStateCount: number;
  currentPage: number;
  hasNext: boolean;
  ordering: FetchBillsOrderingOptions;
  orderedSequence: number[];
  objectMap: { [id: string]: BillObject };
};

export interface CacheState {
  appInitialized: boolean;
  bill: BillState;
};

export interface UpdateBillCacheActionPayload extends FetchBillsSerializedResponseBody { };

export type InitializeAppSagaAction = Action;
export type UpdateBillCacheAction = PayloadAction<UpdateBillCacheActionPayload>;
export type CacheReducer<ActionType = AnyAction> = Reducer<CacheState, ActionType>
