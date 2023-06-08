import React from "react";
import fondo from '../asset/servicio.png'
import Form from 'react-bootstrap/Form';

function Table (){
    return (
        <div className="tablas mt-3" >
            <h5 className=" mb-4 titulo-horas">Horas de servicio registradas hasta la fecha</h5>
                <table className="table table-hover w-100 ">
                    <thead>
                        <tr>
                            <th scope="col">Revisadas</th>
                            <th scope="col">Cantidad de horas</th>
                            <th scope="col">Tipo de servicio</th>
                            <th scope="col">Fecha de Entrega</th>
                            <th scope="col">Comentarios</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-success">
                            <th>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="d-flex  justify-content-evenly mb-3">
                                        <Form.Check type={type} id={`default-${type}`}/>Horas de servicio
                                        </div>))}
                                </Form>
                            </th>
                            <th>5 hrs</th>
                            <td>Historia familiar</td>
                            <td>4 de junio</td>
                            <th>
                                <Form.Control as="textarea"/>
                            </th>
                        </tr>
                    </tbody>
                </table>
                <img className="imagen-service w-100" src= {fondo} alt="servicio-imagen"/>
        </div>
    )
}

export default Table;
