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
  SetNewBillAction,
  SetNewBillActionPayload,
} from "$types/store";
import { FetchAPIOrderingOptions } from "$types/services/api";


const name = "cache";

const initialBillState: BillState = {
  lastRefreshed: new Date().toJSON(),
  totalCount: 0,
  inStateCount: 0,
  currentPage: 0,
  hasNext: false,
  ordering: FetchAPIOrderingOptions.DEFAULT,
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
  const sequenceIndex = state.bill.orderedSequence.indexOf(billObj.id);
  state.bill.orderedSequence.splice(sequenceIndex, 1);
  state.bill.orderedSequence.unshift(billObj.id);
};

const setNewBillReducer: CacheReducer<SetNewBillAction> = (state, action) => {
  const { payload: billObj } = action;
  state.bill.objectMap[billObj.id] = billObj;
  state.bill.orderedSequence.unshift(billObj.id);
  state.bill.totalCount += 1
  state.bill.inStateCount += 1
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
    setNewBill: {
      reducer: setNewBillReducer,
      prepare: (payload: SetNewBillActionPayload) => ({ payload }),
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
  setNewBill,
} = CacheSlice.actions;

export default CacheSlice;
