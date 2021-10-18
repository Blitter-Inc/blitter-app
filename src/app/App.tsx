import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RNETheme } from "@config/theme";
import { AppElement } from "@d/app";
import RootNavigator from "@navigations/RootNavigator";
import Store, { persistor } from "@store/index";


const App: AppElement = () => (
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={RNETheme}>
        <RootNavigator />
      </ThemeProvider>
    </PersistGate>
  </Provider>
);


export default App;
