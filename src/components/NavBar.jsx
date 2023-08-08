
import SNKhead from '../assets/icons/SNKhead.png';
import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar=()=>{
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto">
                <Nav.Link className='d-inline-flex' href="#home">
                    <img src={SNKhead}/>
                    <Navbar.Brand href="#home">PUREgold</Navbar.Brand>
                </Nav.Link>
                <Nav.Link href="#features">
                    Ayuda
                </Nav.Link>
                <Nav.Link href="#pricing">
                Contactos
                </Nav.Link>
            </Nav><CartWidget/>
            </Container>
        </Navbar>
        
        </>
    );
    }
