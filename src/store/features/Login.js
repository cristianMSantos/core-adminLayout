import { createSlice } from "@reduxjs/toolkit";
import api from "../../axios";

export const login = createSlice({
    name: 'login',
    initialState: {
        isAuthenticated: localStorage.getItem('token'),
    },
    reducers: {
        setLogin: (state, action) => {
            localStorage.setItem('token', action.payload.access_token);
            localStorage.setItem("refreshToken", action.payload.refresh_token);
            state.isAuthenticated = localStorage.getItem('token');
        },
        setLogout: (state) => {
            state.user = null
            delete api.defaults.headers.common['Authorization']
            localStorage.removeItem('token')
            state.isAuthenticated = localStorage.getItem('token')
        }
    }
});

export const { setLogin, setLogout } = login.actions;
export default login.reducer;
