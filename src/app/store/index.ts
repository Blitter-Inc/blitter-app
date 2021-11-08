import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import Axios from '$services/axios';
import createSecureStorage from './persist-secure-storage';
import { watchAuth } from './sagas';
import { AuthSlice, CacheSlice, UISlice } from './slices';


const sagaMiddleware = createSagaMiddleware();

const storage = createSecureStorage();
const persistConfig = { key: 'root', storage };

const Reducers = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
  [CacheSlice.name]: CacheSlice.reducer,
  [UISlice.name]: UISlice.reducer,
});
const rootReducer = persistReducer(persistConfig, Reducers);

const Store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(Store);
// persistor.purge();   // Used to clear persist storage from devices.

sagaMiddleware.run(watchAuth);

Axios.interceptors.request.use((config) => {
  const { auth: { credentials: { accessToken } } } = Store.getState();
  if (accessToken) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    else {
      config.headers = { Authorization: `Bearer ${accessToken}` }
    }
  }
  return config;
});

// Typings
type RootState = ReturnType<typeof Store.getState>;
type AppDispatch = typeof Store.dispatch;


export { persistor, RootState, AppDispatch };
export default Store;
