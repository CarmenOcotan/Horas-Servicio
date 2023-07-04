import '../App.css';
import logo from '../asset/logo2023.png'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navb() {
    return (
        <Navbar className="navbar fixed-top navbar-light bg-white nav1" aria-label="Navegación del sitio"expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} className="logo" alt="Funval Internacional"/></Navbar.Brand>
                <Navbar.Toggle aria-controls=''/>
                <Navbar.Offcanvas className='canvas'  placement="end">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link  disabled href="#action1">Página Principal</Nav.Link>
                    <Nav.Link  disabled href="#action2">Área personal</Nav.Link>
                    <Nav.Link  disabled href="#action1">Mis cursos</Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link  href="#action1">Cerrar Sesion</Nav.Link> 
                </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Navb;