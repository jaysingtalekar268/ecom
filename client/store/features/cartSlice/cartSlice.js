import { createSlice } from "@reduxjs/toolkit"

export const userCartSlice = createSlice({
    name: "userCartSliceName",
    initialState: {
        userCartData: [],

    },
    reducers: {
        setCartData: (state, action) => {
            console.warn("crt payload", action)
            state.userCartData = action.payload;
        }
    }
})
export const buyNowSlice = createSlice({
    name: "buyNowName",
    initialState: {
        buyNowData: {}

    },
    reducers: {
        setBuyNowData: (state, action) => {
            console.warn("buy now", action)
            state.buyNowData = action.payload;
        }
    }
})

export const { setCartData } = userCartSlice.actions;
export const { setBuyNowData } = buyNowSlice.actions;

const cartCombinedReducers = {
    userCartData: userCartSlice.reducer,
    buyNowData: buyNowSlice.reducer,
};

export default cartCombinedReducers;
