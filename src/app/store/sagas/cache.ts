import { call, put } from "redux-saga/effects";
import { fetchPhoneNumbers } from "$helpers/contacts";
import { createBill, fetchBills, fetchUserProfiles, updateBill } from "$services/api";
import { completeAppInitialization, setBillCache, setContactCache, setExistingBill, setNewBill } from "$store/slices/cache";
import {
  CreateBillSerializedResponseBody,
  FetchAPIOrderingOptions,
  FetchBillsSerializedResponseBody,
  FetchUserProfilesSerializedResponseBody,
  UpdateBillSerializedResponseBody,
} from "$types/services/api";
import { AddBillSagaAction, EditBillSagaAction, InitializeAppSagaAction } from "$types/store";


export function* initializeApp(action: InitializeAppSagaAction) {
  try {
    const billRes: FetchBillsSerializedResponseBody = yield call(fetchBills, {
      ordering: FetchAPIOrderingOptions.DEFAULT,
    });
    yield put(setBillCache(billRes));
    const phoneNumbers: string[] = yield call(fetchPhoneNumbers);
    const profilesRes: FetchUserProfilesSerializedResponseBody = yield call(fetchUserProfiles, { phoneNumbers });
    yield put(setContactCache(profilesRes));
    yield put(completeAppInitialization());
  } catch (e) {
    console.error(e);
  }
};

export function* addBill(action: AddBillSagaAction) {
  const { args: { setLoading, ...payload } } = action.payload;
  try {
    const newBill: CreateBillSerializedResponseBody = yield call(createBill, payload);
    yield put(setNewBill(newBill));
    yield call(setLoading, false);
  } catch (e) {
    console.error(e);
  }
};

export function* editBill(action: EditBillSagaAction) {
  const { args: { setLoading, ...payload } } = action.payload;
  try { 
    const updatedBill: UpdateBillSerializedResponseBody = yield call(updateBill, payload);
    yield put(setExistingBill(updatedBill));
    yield call(setLoading, false);
  } catch (e) {
    console.error(e);
  }
};
