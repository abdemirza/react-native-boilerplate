import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { orderReducer } from "./orderReducer";

export const rootReducer  = combineReducers({
    cart: cartReducer,
    orders:orderReducer,
})