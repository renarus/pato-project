import { ADD_TO_CART,DECREASE_QUANTITY,REMOVE_FROM_CART,LOAD_CART_ITEMS } from "./actionTypes";

const add_To_Cart=(val)=>{
   return {type:ADD_TO_CART, payload:val} 
}
const remove_From_Cart=(val)=>{
    return {type:REMOVE_FROM_CART,payload:{id:val}}
    }

const decrease_Quantity=(val)=>{
    return {type:DECREASE_QUANTITY,payload:{id:val}}
}
export const loadCartItems = (items) => {
    return {
      type: LOAD_CART_ITEMS,
      payload: items
    };
  };

const cartActions={add_To_Cart,remove_From_Cart,decrease_Quantity,loadCartItems}
export default cartActions;