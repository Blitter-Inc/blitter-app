import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSecureStorage from './persist-secure-storage';
import {
  TempReducer,
} from './reducers';


const storage = createSecureStorage();
const persistConfig = { key: 'root', storage };

const Reducers = combineReducers({
  tempReducer: TempReducer,
});
const rootReducer = persistReducer(persistConfig, Reducers);

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
