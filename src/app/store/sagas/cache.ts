import { call, put } from "redux-saga/effects";
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
    yield put(completeAppInitialization());
  } catch (e) {
    console.error(e);
  }
};
