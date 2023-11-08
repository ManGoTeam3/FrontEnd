// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.username = action.payload.username;
            state.accessToken = action.payload.accessToken;
        },
        logout: () => initialState,
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;