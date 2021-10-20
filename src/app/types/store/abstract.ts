import { Action } from "@reduxjs/toolkit";


export interface EmptyPayload { };

export interface PayloadAction<PayloadType> extends Action {
  payload: PayloadType;
};

export interface ArgedPayloadAction<ArgsType, PayloadType = EmptyPayload> extends Action {
  payload: PayloadType & { args: ArgsType };
};

export type Reducer<StateType, ActionType> = (state: StateType, action: ActionType) => void;
