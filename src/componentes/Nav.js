import React from "react";
import '../App.css';
import logo from '../asset/logo2023.png'
import Nav from 'react-bootstrap/Nav';


function Navb (){
    return(        
    <Nav className="navbar fixed-top navbar-light bg-white navbar-expand shadow" aria-label="Navegación del sitio">
            <div className="primary-navigation">
                <div className="moremenu  d-flex navigation observed">
                    <a href="#p" className="navbar-brand d-none d-md-flex align-items-center m-0 mr-4 p-0 aabtn">
                        <img src={logo} className="logo" alt="Funval Internacional"/>
                    </a>
                    <ul className="nav more-nav navbar-nav">
                        <li className="nav-item" role="none" data-forceintomoremenu="false">
                            <a role="menuitem" className="nav-link  " href="#p" tabIndex="0" aria-current="true" disabled>Página Principal</a>
                        </li>
                        <li className="nav-item" role="none" data-forceintomoremenu="false">
                            <a role="menuitem" className="nav-link  " href="#p" tabIndex="-1" disabled>Área personal</a>
                        </li>
                        <li className="nav-item" role="none" data-forceintomoremenu="false">
                            <a role="menuitem" className="nav-link  " href="#p" tabIndex="-1" disabled> Mis cursos</a>
                        </li>
                    </ul>
                </div>
            </div>
    </Nav>
    )
}
export default Navb;
