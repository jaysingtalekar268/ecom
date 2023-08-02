import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ProductCombinedReducers from './features/product/productSlice'
import cartCombinedReducers from './features/cartSlice/cartSlice';

const allCombinedReducer = combineReducers({
    ...ProductCombinedReducers,
    ...cartCombinedReducers
});

const store = configureStore({
    reducer: allCombinedReducer,
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;