import cart from '../assets/icons/cart.png';
import Container from 'react-bootstrap/Container';
export const CartWidget=()=>{
    return (
    <>
    <img src={cart}/><div className='text-light'><span>0</span></div>
    </>
    )
    
}