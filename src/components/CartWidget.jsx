import cart from '../assets/icons/cart.png';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const CartWidget=()=>{
    const {totalWidget}=useContext(CartContext)
    return (
    
    <Link to="/Cart">
    <img src={cart} alt="Cart"/><div className='text-light'>
    <span style={{color:"white"}}>{totalWidget}</span></div>
    </Link>
    
    )
    
}