import { AnyAction } from "@reduxjs/toolkit";
import { PayloadAction, Reducer } from "./abstract";


export interface UITheme {
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

export interface UIAction {
  isLoading: boolean;
};

export interface UIState {
  theme: UITheme;
  action: UIAction;
};

export interface UpdateThemeActionPayload {
  theme: UITheme;
};

export interface UpdateAccentActionPayload {
  ACCENT: string;
};

export type UpdateThemeAction = PayloadAction<UpdateThemeActionPayload>;
export type UpdateAccentAction = PayloadAction<UpdateAccentActionPayload>;
export type UIReducer<ActionType = AnyAction> = Reducer<UIState, ActionType>;
