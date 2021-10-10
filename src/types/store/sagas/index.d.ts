import { Action } from "..";
import { SagaArgs } from "./auth";


export type FetchSagaArgsType = <Type>(action: Action) => Type | SagaArgs;
export * from "./auth";
