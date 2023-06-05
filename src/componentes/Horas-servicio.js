import React from "react";
import '../App.css'
import Table from "./ExportApi";

function Horas() {
    return (
        <div className="container mb-5 pt-5">
            <h3 className="titulo mb-4">Horas de servicio</h3>

            <div className="main-content mb-5">
                <form className="servicio row m-3 pt-4 g-2">
                    <div className="col-auto">
                        <label htmlFor="cedula" className="label fw-bold">id</label>
                        <input type="text" className="form-control" id="cedula" placeholder="ingresa id de estudiante"/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Confirm</button>
                    </div>
                </form>
                {/* arreglo de react a continuacion */}
                <Table/>
            </div>
        </div>
    );
}

export default Horas;
