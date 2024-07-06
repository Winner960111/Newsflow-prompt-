import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import UserAuth from "./Slices/UserAuth";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({

  UserAuth: UserAuth,

});

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)