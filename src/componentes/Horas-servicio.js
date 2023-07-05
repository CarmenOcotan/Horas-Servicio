import Button from 'react-bootstrap/Button';
import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Table1 from "./ExportApi";
import "../App.css";

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
    <div className="container lo cont-horas pt-5">
      <h3 className="titulo mb-4">Developer 4 - A</h3>
      <div className="main-content mb-5 border">
        <Form className="servicio row m-3 pt-4  w-75 g-2 flex-column"> {/* Agregar a la clase del Form un "d-none" para mostrar el formulario del id solo al Encargado o maestro */}
          <Row className="align-items-center">
            <Col xs="auto">
              <h6>Selecciona el Alumno por su Id</h6>
              <Form.Label  
                htmlFor="cedula" 
                className="label fw-bold"
                visuallyHidden>
                ID
              </Form.Label>
              <Form.Control
                type="text"
                className="mb-2"
                id="cedula"
                placeholder="Ingresa el ID del estudiante..."
                onChange={inputChange}
              />
            </Col>
              <Col xs="auto">
                <Button 
                  type="submit" 
                  className="mb-3" 
                  onClick={searchBtn}>
                  Buscar
                </Button>
            </Col>
          </Row>
        </Form>
                    
        {errMessage && (
          <p className="text-danger m-2">¡Oops! No se encontraron resultados.</p>
        )}

        {/* arreglo de react a continuacion */}
        <Table1 data={filteredData} />

      </div>
    </div>
  );
}

export default Horas;
