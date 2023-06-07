import React, { useEffect } from "react";
import "../App.css";
import { useState } from "react";
import Table from "./ExportApi";

function Horas({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [errMessage, setErrMessage] = useState(false);



//   filtro para la busqueda por matricula o ID
  const idSearch = (e) => {
    let result = [];
    if (!inputValue) {
      result = data;
    } else {
      const inputNumber = parseInt(inputValue);
      result = data.filter((dato) => dato.id === inputNumber);
    }
    setFilteredData(result);
    setErrMessage(result.length === 0);
  };


//Funcion para filtrar al hacer click en el botón
  const searchBtn = (e) => {
    e.preventDefault();
    idSearch();
  };


  //funcion para guardar los caracteres introducidos por el usuario en el input
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  

  useEffect(() => {
    idSearch();
  }, [data]);

  return (
    <div className="container mb-5 pt-5">
      <h3 className="titulo mb-4">Horas de servicio</h3>
      <div className="main-content mb-5">
        <form className="servicio row m-3 pt-4 g-2">
          <div className="col-auto">
            <label htmlFor="cedula" className="label fw-bold">
              ID
            </label>
            <input
              type="text"
              className="form-control"
              id="cedula"
              placeholder="Ingresa el ID del estudiante..."
              onChange={inputChange}
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={searchBtn}
            >
              Confirm
            </button>
          </div>
        </form>

        {errMessage && (
          <p className="text-danger">¡Oops! No se encontraron resultados.</p>
        )}

        {/* arreglo de react a continuacion */}
        <Table data={filteredData} />

      </div>
    </div>
  );
}

export default Horas;
