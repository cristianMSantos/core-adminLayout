import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: localStorage.getItem('token'),
    },
    reducers: {
        setLogin: (state, action) => {
            localStorage.setItem('token', action.payload);
            state.isAuthenticated = localStorage.getItem('token');

        }
    }
});

export const { setLogin } = login.actions;
export default login.reducer;
