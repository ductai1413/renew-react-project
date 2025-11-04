import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';

interface AuthState {
  accessToken: string;
  user: unknown;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken') ?? '',
  user: localStorage.getItem('user') ?? '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: unknown }>) => {
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: state => {
      state.accessToken = '';
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
