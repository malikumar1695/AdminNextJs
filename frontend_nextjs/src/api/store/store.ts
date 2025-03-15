import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import authReducer from '../store/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // Default localStorage for web

const persistConfig = {
  key: "auth",
  storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    auth: persistedAuthReducer//authReducer
  },
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;