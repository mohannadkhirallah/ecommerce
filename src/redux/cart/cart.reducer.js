import CartActionTypes from './cart.types';
import { addITemToCart } from "./cart.utils";

const INITAL_STATE ={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state =INITAL_STATE, action) =>
{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addITemToCart(state.cartItems, action.payload)
            }
            default:
                return state;
    }
}

export default cartReducer;