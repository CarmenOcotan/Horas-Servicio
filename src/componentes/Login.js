import React from 'react';
import logo from '../asset/logo2023.png';
import key from '../asset/key-fill.svg';
import '../App.css';

export default function Logini() {


  return (
    
    <div className='backg'>
      <div className="container  d-flex justify-content-center align-items-center vw-100 vh-100 ">
        <div class="bg-white d-flex border rounded-3">
          <div className="d-flex flex-column justify-content-around mt-4 mb-4 mx-3 div_primario">
            <img alt="LogoFunval" src={logo} />
            <form className="mx-5 d-flex justify-content-center align-items-center flex-column" action="#" method="">
              <input className="form-control mb-3" type="text" placeholder="Nombre de usuario" />
              <input className="form-control mb-3" type="password" placeholder="Contraseña" />
              <button className="btn btn-primary mb-3 form-control pt-2" type="submit">Acceder</button>
              <p><a href="#.">¿Ha extraviado la contraseña?</a></p>
            </form>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center div_secundario">
            <p className="mb-4">Ingregar con</p>
            <span className="border border-dark rounded-4 mb-5">
              <a className="btn" href="#.">
                <img className="img" src={key} alt="key.png" /> SSO
              </a>
            </span>
            <p><a href="#.">Español - Internacional ‎(es)‎ </a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
