import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthPayload {
    username: string;
    password: string;
}

interface AuthState {
    token: string;
    loading: boolean;
    error: string;
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || '',
    loading: false,
    error: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authRequest(state, action: PayloadAction<AuthPayload>) {
            state.loading = true;
            state.error = '';
        },
        authSuccess(state, action: PayloadAction<string>) {
            state.loading = false;
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        authFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.token = '';
            localStorage.removeItem('token');
        }
    }
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;

export default authSlice.reducer;