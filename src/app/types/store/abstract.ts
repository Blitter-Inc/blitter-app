import { Action } from "@reduxjs/toolkit";

export interface EmptyPayload { };

export interface ArgedPayload<ArgsType, PayloadType = EmptyPayload> extends PayloadType {
  args: ArgsType;
};

export interface PayloadAction<PayloadType> extends Action {
  payload: PayloadType;
};

export interface ArgedPayloadAction<ArgsType, PayloadType = EmptyPayload> extends Action {
  payload: ArgedPayload<ArgsType, PayloadType>;
};

export type Reducer<StateType, ActionType> = (state: StateType, action: ActionType) => void;
