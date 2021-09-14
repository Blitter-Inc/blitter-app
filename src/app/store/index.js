import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createSecureStorage from './persist-secure-storage';
import {
  TempReducer,
  AuthReducer,
} from './reducers';
import { watchAuth } from './sagas';


const sagaMiddleware = createSagaMiddleware();

const storage = createSecureStorage();
const persistConfig = { key: 'root', storage };

const Reducers = combineReducers({
  tempReducer: TempReducer,
  auth: AuthReducer,
});
const rootReducer = persistReducer(persistConfig, Reducers);

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
// persistor.purge();   // Used to clear persist storage from devices.

sagaMiddleware.run(watchAuth);

export { store, persistor };
