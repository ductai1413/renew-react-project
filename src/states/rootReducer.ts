import { combineReducers } from '@reduxjs/toolkit';
import CouterReducer from '@/states/reducers/CounterSlice';
import AuthReducer from '@/states/reducers/AuthSlice';
import { authApi } from '@/services/authApi';
import { usersApi } from '@/services/usersApi';

export const rootReducer = combineReducers({
  CouterReducer,
  AuthReducer,
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
});
