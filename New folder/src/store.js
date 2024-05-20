// import {createStore,combineReducers,applyMiddleware} from 'react-redux';
import {thunk} from 'redux-thunk';
// import {composeWithDevTools} from 'redux-de';
import { configureStore, Tuple } from '@reduxjs/toolkit'
import {productListReducers,productDetailsReducers} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducers } from './reducers/userReducers';
import { userRegisterReducers } from './reducers/userReducers';


// const reducer =combineReducers({
//     productList:productListReducers,
//     productDetails:productDetailsReducers,
//     cart:cartReducer,
//     userLogin:userLoginReducers,
//     userRegister:userRegisterReducers,
// })

// const cartItemsFromStorage = localStorage.getItem('cartItems')?
// JSON.parse(localStorage.getItem('cartItems')): []

// const userInfoFromStorage = localStorage.getItem('userInfo')?
// JSON.parse(localStorage.getItem('userInfo')): null



// const initailState = {
//     cart:{cartItems:cartItemsFromStorage},
//     userLogin:{userInfo:userInfoFromStorage}
// }

// const middleware=[thunk]
// const store = createStore(reducer,initailState)
const store =configureStore({
    reducer:{
        productList:productListReducers,
        productDetails:productDetailsReducers,
        cart:cartReducer,
        userLogin:userLoginReducers,
        userRegister:userRegisterReducers,
    }
  })

export default store;