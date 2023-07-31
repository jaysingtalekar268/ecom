import { createSlice } from "@reduxjs/toolkit"

export const productSlice = createSlice({
    name: "productData",
    initialState: {
        test: "test test",

    },
    reducers: {
        setTest: (state, action) => {
            state = action.payload;
        }
    }
})

export const { setTest } = productSlice.actions;

const ProductCombinedReducers = {
    productData: productSlice.reducer,
};

export default ProductCombinedReducers;
