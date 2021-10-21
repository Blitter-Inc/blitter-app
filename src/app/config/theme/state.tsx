import React from "react";
import { useAppSelector } from "$store/hooks"
import { UITheme } from "$types/store";


export interface AppThemeHookProps {
  appTheme: UITheme;
};

export const useAppTheme = () => {
  return useAppSelector(state => state.ui.theme);
};

export const withAppTheme = (Component: any) => {
  return (props: any) => {
    const theme = useAppTheme();
    return (
      <Component appTheme={theme} {...props} />
    )
  };
};
