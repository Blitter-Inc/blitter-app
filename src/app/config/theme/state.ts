import { useAppSelector } from "$store/hooks"
// import Store from "$store/index";


export const useAppTheme = () => {
  return useAppSelector(state => state.ui.theme);
};

// export const getAppState = () => Store.getState().ui.theme;
