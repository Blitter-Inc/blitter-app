import { call, put } from "redux-saga/effects";
import { fetchPhoneNumbers } from "$helpers/contacts";
import { fetchBills, fetchUserProfiles } from "$services/api";
import { completeAppInitialization, setBillCache, setContactCache } from "$store/slices/cache";
import { FetchBillsOrderingOptions, FetchBillsSerializedResponseBody, FetchUserProfilesSerializedResponseBody } from "$types/services/api";
import { InitializeAppSagaAction } from "$types/store";


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
