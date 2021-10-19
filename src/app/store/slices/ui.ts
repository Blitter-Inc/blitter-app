import { createSlice } from "@reduxjs/toolkit";
import { ColorPalette } from "$config/theme";
import {
  UIReducer,
  UIState,
  UITheme,
  UpdateAccentAction,
  UpdateThemeAction,
} from "$types/store";


const name = "ui";

const initialState: UIState = {
  theme: ColorPalette,
  action: {
    isLoading: false,
  },
};

const toggleLoadingReducer: UIReducer = state => {
  state.action.isLoading = !state.action.isLoading;
};

const updateThemeReducer: UIReducer<UpdateThemeAction> = (state, action) => {
  const { payload: { theme } } = action;
  state.theme = theme;
};

const updateAccentReducer: UIReducer<UpdateAccentAction> = (state, action) => {
  const { payload: { ACCENT } } = action;
  state.theme.ACCENT = ACCENT;
};

const UISlice = createSlice({
  name,
  initialState,
  reducers: {
    toggleLoading: toggleLoadingReducer,
    updateTheme: {
      reducer: updateThemeReducer,
      prepare: (theme: UITheme) => ({ payload: { theme } }),
    },
    updateAccent: {
      reducer: updateAccentReducer,
      prepare: (ACCENT: string) => ({ payload: { ACCENT } }),
    },
  },
});


export const {
  toggleLoading,
  updateTheme,
  updateAccent,
} = UISlice.actions;

export default UISlice;
