import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PUREgold from '../assets/icons/SNKhead.png';
import {CartWidget}  from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar=()=>{
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto">
                <Nav.Link className='d-inline-flex'as={Link} to="/">
                    <img src={PUREgold} alt=""/>
                    <Navbar.Brand as={Link} to="/" style={{marginLeft:"20px"}}>PUREGOLD</Navbar.Brand>
                </Nav.Link>
                <Nav.Link as={Link} to="/category/Anillos" style={{marginTop:"8px"}}>
                    Anillos
                </Nav.Link>
                <Nav.Link as={Link} to="/category/Cadenas" style={{marginTop:"8px"}}>
                Cadenas
                </Nav.Link>
                <Nav.Link as={Link} to="/category/Pulseras" style={{marginTop:"8px"}}>
                Pulseras
                </Nav.Link>
            </Nav><CartWidget/>
            </Container>
        </Navbar>
        
        </>
    );
    }
