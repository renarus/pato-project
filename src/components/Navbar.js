import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosContact} from 'react-icons/io'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cartItems=useSelector(state=>state.reducer.cart)
  return (
    <div className='navbar'>
      <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/meals'>Meals</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contact'><IoIosContact /></Link>
          <Link to='/cart'><FaCartShopping />{cartItems.length}</Link>
          </ul>
    </div>
  )
}

export default Navbar