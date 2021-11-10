import { createSlice } from "@reduxjs/toolkit";
import {
  AddBillSagaArgs,
  BillState,
  CacheReducer,
  CacheState,
  ContactState,
  SetBillCacheAction,
  SetBillCacheActionPayload,
  SetContactCacheAction,
  SetContactCacheActionPayload,
} from "$types/store";
import { FetchBillsOrderingOptions } from "$types/services/api/bill";


const name = "cache";

const initialBillState: BillState = {
  lastRefreshed: new Date().toJSON(),
  totalCount: 0,
  inStateCount: 0,
  currentPage: 0,
  hasNext: false,
  ordering: FetchBillsOrderingOptions.DEFAULT,
  orderedSequence: [],
  objectMap: {},
};

const initialContactState: ContactState = {
  lastRefreshed: new Date().toJSON(),
  totalCount: 0,
  objectMap: {},
};

const initialState: CacheState = {
  appInitialized: false,
  bill: initialBillState,
  contact: initialContactState,
};

const completeAppInitializationReducer: CacheReducer = state => {
  state.appInitialized = true;
};

const setBillCacheReducer: CacheReducer<SetBillCacheAction> = (state, action) => {
  const { payload: billCache } = action;
  state.bill = {
    ...billCache,
    inStateCount: billCache.totalCount,
    lastRefreshed: new Date().toJSON(),
  };
};

const setContactCacheReducer: CacheReducer<SetContactCacheAction> = (state, action) => {
  const { payload: contactObjectMap } = action;
  state.contact = {
    totalCount: Object.keys(contactObjectMap).length,
    objectMap: contactObjectMap,
    lastRefreshed: new Date().toJSON(),
  };
};

const CacheSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBill: {
      reducer: () => { },
      prepare: (args: AddBillSagaArgs) => ({ payload: { args } }),
    },
    completeAppInitialization: completeAppInitializationReducer,
    initializeApp: () => { },
    setBillCache: {
      reducer: setBillCacheReducer,
      prepare: (payload: SetBillCacheActionPayload) => ({ payload }),
    },
    setContactCache: {
      reducer: setContactCacheReducer,
      prepare: (payload: SetContactCacheActionPayload) => ({ payload }),
    },
  },
});


export const {
  addBill,
  completeAppInitialization,
  initializeApp,
  setBillCache,
  setContactCache,
} = CacheSlice.actions;

export default CacheSlice;
