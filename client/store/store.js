import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ProductCombinedReducers from './features/product/productSlice'

const allCombinedReducer = combineReducers({ ...ProductCombinedReducers });

const store = configureStore({
    reducer: allCombinedReducer,
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;