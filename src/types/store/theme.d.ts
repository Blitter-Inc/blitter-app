import { AnyAction } from "@reduxjs/toolkit";
import { PayloadAction, Reducer } from "./abstract";


type RecursivePartial<T> = {
  [P in keyof T]?:
  T[P] extends (infer U)[] ? RecursivePartial<U>[] :
  T[P] extends object ? RecursivePartial<T[P]> :
  T[P];
};

export interface ThemeState {
  PRIMARY: string;
  SECONDARY: string;
  ACCENT: string;
  FONT: {
    INPUT: string;
    PLACEHOLDER: string;
    SUBTEXT: string;
    TEXT: string;
  };
};

export interface UpdateThemeActionPayload {
  theme: ThemeState;
};

export interface UpdateAccentActionPayload {
  ACCENT: string;
};

export type UpdateThemeAction = PayloadAction<UpdateThemeActionPayload>;
export type UpdateAccentAction = PayloadAction<UpdateAccentActionPayload>;
export type ThemeReducer<ActionType = AnyAction> = Reducer<ThemeState, ActionType>;
