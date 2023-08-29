import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SNKhead from '../assets/icons/SNKhead.png';
import {CartWidget}  from './CartWidget';


export const NavBar=()=>{
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto">
                <Nav.Link className='d-inline-flex' href="/">
                    <img src={SNKhead} alt=""/>
                    <Navbar.Brand href="/">PUREGOLD</Navbar.Brand>
                </Nav.Link>
                <Nav.Link href="/category/Anillos">
                    Anillos
                </Nav.Link>
                <Nav.Link href="/category/Cadenas">
                Cadenas
                </Nav.Link>
                <Nav.Link href="/category/Pulseras">
                Pulseras
                </Nav.Link>
            </Nav><CartWidget/>
            </Container>
        </Navbar>
        
        </>
    );
    }
