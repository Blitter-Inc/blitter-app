import { Action, AnyAction } from "@reduxjs/toolkit";
import { User } from "$types/modules/auth";
import { FetchBillsOrderingOptions, FetchBillsSerializedResponseBody } from "$types/services/api/bill";
import { PayloadAction, Reducer } from "./abstract";
import { BillObject } from "../modules/bill";
import { FetchUserProfilesSerializedResponseBody } from "$types/services/api";

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

export interface ContactObjectMap { [id: string]: User };

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

export type InitializeAppSagaAction = Action;
export type SetBillCacheAction = PayloadAction<SetBillCacheActionPayload>;
export type SetContactCacheAction = PayloadAction<SetContactCacheActionPayload>;
export type CacheReducer<ActionType = AnyAction> = Reducer<CacheState, ActionType>
