import { Action } from "@d/store";

export const fetchSagaArgs = (action: Action) => action.payload.args;
