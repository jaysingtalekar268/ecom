import { createSlice } from "@reduxjs/toolkit"

export const loginSlice= createSlice({
    name: "loginData",
    initialState: {
        userLoginData: {},

    },
    reducers: {
        setUserLoginData: (state, action) => {
            console.warn(action)
            state= action.payload;
        }
    }
})

export const { setUserLoginData } = loginSlice.actions;

const loginCombinedReducers = {
    loginData: loginSlice.reducer,
};

export default loginCombinedReducers;
