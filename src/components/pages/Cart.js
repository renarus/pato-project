import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import cartActions from '../../redux/cartActions'
import { useDispatch } from 'react-redux'
import {ImBin} from 'react-icons/im'
const Cart = () => {
  const cartItemsRedux=useSelector(state=>state.reducer.cart)
  const total=useSelector(state=>state.reducer.totalPrice)
  const dispatch = useDispatch();
  const [cartItems,setCartItems]=useState([])
  console.log(total)
  useEffect(()=>{
    setCartItems(cartItemsRedux)
  },[])
  useEffect(() => {
    const localData = localStorage.getItem("CartItems");
    if (localData) {
      setCartItems(JSON.parse(localData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className='cart'>
      {cartItemsRedux.map(item=>{
        return(
          <div className='cart-items'>
            <img src={item.img} alt="" />
            <button onClick={()=>dispatch(cartActions.decrease_Quantity(item.id))} >-</button>
             <input type='number' value={item.qty}/>
             <button onClick={()=>dispatch(cartActions.add_To_Cart(item))}>+</button>
             <ImBin onClick={()=>dispatch(cartActions.remove_From_Cart(item.id))} />
          </div>
        )
      })} 
       <h1>Total:${total} </h1>
    </div>
  )
}

export default Cart