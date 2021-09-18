import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import createSecureStorage from './persist-secure-storage';
import { watchAuth } from './sagas';
import { AuthSlice } from './slices';


const sagaMiddleware = createSagaMiddleware();

const storage = createSecureStorage();
const persistConfig = { key: 'root', storage };

const Reducers = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
});
const rootReducer = persistReducer(persistConfig, Reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const persistor = persistStore(store);
// persistor.purge();   // Used to clear persist storage from devices.

sagaMiddleware.run(watchAuth);

// Typings
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;


export { store, persistor, RootState, AppDispatch };
