import { FetchSagaArgsType } from "@d/store/sagas";


export const fetchSagaArgs: FetchSagaArgsType = (action) => action.payload.args;
