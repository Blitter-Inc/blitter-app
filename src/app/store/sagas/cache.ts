import { call, put } from "redux-saga/effects";
import { fetchPhoneNumbers } from "$helpers/contacts";
import { fetchBills } from "$services/api/bill";
import { completeAppInitialization, setBillCache } from "$store/slices/cache";
import { FetchBillsOrderingOptions, FetchBillsSerializedResponseBody } from "$types/services/api/bill";
import { InitializeAppSagaAction } from "$types/store";


export function* initializeApp(action: InitializeAppSagaAction) {
  try {
    const billRes: FetchBillsSerializedResponseBody = yield call(fetchBills, {
      ordering: FetchBillsOrderingOptions.DEFAULT,
    });
    yield put(setBillCache(billRes));
    const phoneNumbers: string[] = yield call(fetchPhoneNumbers);
    console.log(phoneNumbers);    // will be replaced by API call
    yield put(completeAppInitialization());
  } catch (e) {
    console.error(e);
  }
};
