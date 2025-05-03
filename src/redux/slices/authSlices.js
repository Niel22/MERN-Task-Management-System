import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : true,

    isSidebarOpen: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user-info', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.user = null;
            localStorage.removeItem('user-info');
        },
        openSideBar: (state, action) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const {
    setCredentials, logout, openSideBar
} = authSlice.actions;

export default authSlice.reducer;