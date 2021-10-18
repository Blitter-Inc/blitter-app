import { createSlice } from "@reduxjs/toolkit";
import { ColorPalette } from "@config/theme";
import { ThemeReducer, ThemeState, UpdateAccentAction, UpdateThemeAction } from "@d/store";


const name = "theme";

const initialState: ThemeState = ColorPalette;

const updateThemeReducer: ThemeReducer<UpdateThemeAction> = (state, action) => {
  const { payload: { theme } } = action;
  state = { ...theme };
};

const updateAccentReducer: ThemeReducer<UpdateAccentAction> = (state, action) => {
  const { payload: { ACCENT } } = action;
  state.ACCENT = ACCENT;
};

const ThemeSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateTheme: {
      reducer: updateThemeReducer,
      prepare: (theme: ThemeState) => ({ payload: { theme } }),
    },
    updateAccent: {
      reducer: updateAccentReducer,
      prepare: (ACCENT: string) => ({ payload: { ACCENT } }),
    },
  },
});


export const {
  updateTheme,
  updateAccent,
} = ThemeSlice.actions;

export default ThemeSlice;
