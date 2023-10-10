// authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'; // You'll need Axios or another HTTP client

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, isLoading: false },
    reducers:
    {
        login: (state, action) => {
            state.isLoading = true;
        },
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isLoading = false;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
    try {
        // Dispatch the login start action to show loading indicator
        dispatch(loginStart());

        // Make a request to your backend API to validate the credentials
        const response = await axios.post("http://localhost:8000/auth/login", credentials);
        // Adjust the API endpoint

        // Assuming the response contains user data or a token upon successful login
        const user = response.data;

        // Dispatch the login success action with the user data
        dispatch(loginSuccess(user));
    } catch (error) {
        // Handle login failure (e.g., show an error message)
        dispatch(loginFailure());
    }
};

export default authSlice.reducer;
