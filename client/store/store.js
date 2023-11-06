import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ProductCombinedReducers from './features/product/productSlice'
import cartCombinedReducers from './features/cartSlice/cartSlice';
import loginCombinedReducers from './features/login/loginSlice';
const allCombinedReducer = combineReducers({
    ...ProductCombinedReducers,
    ...cartCombinedReducers,
    ...loginCombinedReducers,
});

const store = configureStore({
    reducer: allCombinedReducer,
})
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;