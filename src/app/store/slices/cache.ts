import { createSlice } from "@reduxjs/toolkit";
import {
  AddBillSagaArgs,
  BillState,
  CacheReducer,
  CacheState,
  ContactState,
  EditBillSagaArgs,
  SetBillCacheAction,
  SetBillCacheActionPayload,
  SetContactCacheAction,
  SetContactCacheActionPayload,
  SetExistingBillAction,
  SetExistingBillActionPayload,
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

const setExistingBillReducer: CacheReducer<SetExistingBillAction> = (state, action) => {
  const { payload: billObj } = action;
  state.bill.objectMap[billObj.id] = billObj;
};

const CacheSlice = createSlice({
  name,
  initialState,
  reducers: {
    addBill: {
      reducer: () => { },
      prepare: (args: AddBillSagaArgs) => ({ payload: { args } }),
    },
    editBill: {
      reducer: () => { },
      prepare: (args: EditBillSagaArgs) => ({ payload: { args } }),
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
    setExistingBill: {
      reducer: setExistingBillReducer,
      prepare: (payload: SetExistingBillActionPayload) => ({ payload }),
    },
  },
});


export const {
  addBill,
  editBill,
  completeAppInitialization,
  initializeApp,
  setBillCache,
  setContactCache,
  setExistingBill,
} = CacheSlice.actions;

export default CacheSlice;
