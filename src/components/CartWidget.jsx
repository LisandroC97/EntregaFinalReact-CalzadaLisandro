import cart from '../assets/icons/cart.png';
import Container from 'react-bootstrap/Container';
export let CartWidget=()=>{
    return (
    <Container className='d-inline-flex'>
    Carrito
    <img src={cart}/><div className='text-light'>0</div>
    </Container>
    )
}