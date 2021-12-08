import { Action, AnyAction } from "@reduxjs/toolkit";
import { UserObject } from "$types/modules/auth";
import {
  CreateBillHandlerArgs,
  FetchBillsOrderingOptions,
  FetchBillsSerializedResponseBody,
  UpdateBillHandlerArgs,
} from "$types/services/api/bill";
import { PayloadAction, Reducer } from "./abstract";
import { BillObject } from "../modules/bill";
import { ArgedPayloadAction } from ".";


export interface BillObjectMap { [id: string]: BillObject };

export interface BillState {
  lastRefreshed: string;
  totalCount: number;
  inStateCount: number;
  currentPage: number;
  hasNext: boolean;
  ordering: FetchBillsOrderingOptions;
  orderedSequence: number[];
  objectMap: BillObjectMap;
};

export interface ContactObjectMap { [id: string]: UserObject };

export interface ContactState {
  lastRefreshed: string;
  totalCount: number;
  objectMap: ContactObjectMap;
};

export interface CacheState {
  appInitialized: boolean;
  bill: BillState;
  contact: ContactState;
};

export interface SetBillCacheActionPayload extends FetchBillsSerializedResponseBody { };

export interface SetContactCacheActionPayload extends ContactObjectMap { };

export interface SetExistingBillActionPayload extends BillObject { };

export interface AddBillSagaArgs extends CreateBillHandlerArgs { };

export interface EditBillSagaArgs extends UpdateBillHandlerArgs { };

export type InitializeAppSagaAction = Action;
export type SetBillCacheAction = PayloadAction<SetBillCacheActionPayload>;
export type SetContactCacheAction = PayloadAction<SetContactCacheActionPayload>;
export type SetExistingBillAction = PayloadAction<SetExistingBillActionPayload>;
export type AddBillSagaAction = ArgedPayloadAction<AddBillSagaArgs>;
export type EditBillSagaAction = ArgedPayloadAction<EditBillSagaArgs>;
export type CacheReducer<ActionType = AnyAction> = Reducer<CacheState, ActionType>
