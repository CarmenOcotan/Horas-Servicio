import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Nav2() {
    return (
        <Navbar className="nav2 navbar fixed-top shadow" text="white" aria-label="Navegación del sitio">
            <Container className='flex'>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link className="text-white " href="#action1" disabled>Cursos</Nav.Link>
                    <Nav.Link className="text-white" href="#action2" disabled>Participantes</Nav.Link>
                    <Nav.Link className="text-white" href="#action1" disabled>Calificaciones</Nav.Link>
                    <Nav.Link className="text-white" href="#action2" disabled>Competencias</Nav.Link>
                    <Nav.Link className="text-white hover2 ll" href="./Login.js">Horas de Servicio</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Nav2;