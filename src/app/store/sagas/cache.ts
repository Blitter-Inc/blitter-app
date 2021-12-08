import { call, put } from "redux-saga/effects";
import { fetchPhoneNumbers } from "$helpers/contacts";
import { createbill, fetchBills, fetchUserProfiles } from "$services/api";
import { completeAppInitialization, setBillCache, setContactCache } from "$store/slices/cache";
import {
  FetchBillsOrderingOptions,
  FetchBillsSerializedResponseBody,
  FetchUserProfilesSerializedResponseBody,
} from "$types/services/api";
import { AddBillSagaAction, InitializeAppSagaAction } from "$types/store";


export function* initializeApp(action: InitializeAppSagaAction) {
  try {
    const billRes: FetchBillsSerializedResponseBody = yield call(fetchBills, {
      ordering: FetchBillsOrderingOptions.DEFAULT,
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
  const { args: payload } = action.payload;
  try {
    yield call(createbill, payload);
    const fetchbillsRes: FetchBillsSerializedResponseBody = yield call(fetchBills, {
      ordering: FetchBillsOrderingOptions.DEFAULT,
    });
    yield put(setBillCache(fetchbillsRes));
  } catch (e) {
    console.error(e);
  }
};
