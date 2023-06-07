import React from "react";
import '../App.css'
import { useState } from "react";

function Horas({data}) {

    const [inputValue, setInputValue] = useState("")

    const idSearch = (e) => {
        setInputValue(e.target.value);

        let result = []
        if (!inputValue) {
            result = data;
            
        }else {
            result =data.filter((dato) => dato.id === inputValue)
        }
        
        console.log(result)
    }
    
    
    //Metodo del filtrado
 



    return (
        <div className="container mb-5 pt-5">
            <h3 className="titulo mb-4">Horas de servicio</h3>

            <div className="main-content mb-5">
                <form className="servicio row m-3 pt-4 g-2">
                    <div className="col-auto">
                        <label htmlFor="cedula" className="label fw-bold">ID</label>
                        <input type="text" className="form-control" id="cedula" placeholder="Ingresa el ID del estudiante..." onChange={idSearch}/>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Confirm</button>
                    </div>
                </form>
                {/* arreglo de react a continuacion */}
            
            </div>
        </div>
    );
}

export default Horas;
