import React from "react";
import { useAppSelector } from "$store/hooks"


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
