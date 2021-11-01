import { createSlice } from "@reduxjs/toolkit";
import {
  BillState,
  CacheReducer,
  CacheState,
  UpdateBillCacheAction,
  UpdateBillCacheActionPayload,
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

const initialState: CacheState = {
  appInitialized: false,
  bill: initialBillState,
};

const completeAppInitializationReducer: CacheReducer = state => {
  state.appInitialized = true;
};

const setBillCacheReducer: CacheReducer<UpdateBillCacheAction> = (state, action) => {
  const { payload: billCache } = action;
  state.bill = {
    ...billCache,
    inStateCount: billCache.totalCount,
    lastRefreshed: new Date().toJSON(),
  };
};

const CacheSlice = createSlice({
  name,
  initialState,
  reducers: {
    completeAppInitialization: completeAppInitializationReducer,
    initializeApp: () => { },
    setBillCache: {
      reducer: setBillCacheReducer,
      prepare: (payload: UpdateBillCacheActionPayload) => ({ payload }),
    },
  },
});


export const {
  completeAppInitialization,
  initializeApp,
  setBillCache,
} = CacheSlice.actions;

export default CacheSlice;
