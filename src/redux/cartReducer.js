import { ADD_TO_CART,REMOVE_FROM_CART,DECREASE_QUANTITY } from "./actionTypes";

const initialState={
    cart:[],
    totalPrice:0
}

const cartReducer=(state=initialState,action)=>{
    switch(action.type){
      case ADD_TO_CART:
        const existItem=state.cart.find(product=>product.id===action.payload.id)
        if(existItem){
           return{...state,cart:state.cart.map(x=>x.id===action.payload.id ? {...x,qty:x.qty+1} :x),totalPrice:Number(parseInt(state.totalPrice)+action.payload.price)}
        }
        return {...state,cart:[...state.cart,action.payload],totalPrice:Number(parseInt(state.totalPrice)+action.payload.price)}

         case REMOVE_FROM_CART:
            return { ...state,cart:state.cart.filter(x=>x.id!==action.payload.id),totalPrice:state.totalPrice-action.payload.price *action.payload.qty}

            case DECREASE_QUANTITY:
                return {...state,cart:state.cart.map(x=>x.id===action.payload.id ? {...x,qty:x.qty>1?x.qty-1 : 1}:x),totalPrice:action.payload.qty>1 ? state.totalPrice-action.payload.price:state.totalPrice}
                default:
                    return state
        }
       

}
export default cartReducer;