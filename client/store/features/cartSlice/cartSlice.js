    import { createSlice } from "@reduxjs/toolkit"

    export const userCartSlice = createSlice({
        name: "userCartSliceName",
        initialState: {
            userCartData: [],

        },
        reducers: {
            setCartData: (state, action) => {
                console.warn("crt payload",action)
                 state.userCartData= action.payload;
            }
        }
    })

    export const { setCartData } = userCartSlice.actions;

    const cartCombinedReducers = {
        userCartData: userCartSlice.reducer,
    };

    export default cartCombinedReducers;
