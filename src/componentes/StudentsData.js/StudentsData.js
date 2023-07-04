import axios from "axios";
import { useState, useEffect } from "react";
import Horas from "../Horas-servicio";


export default function Students() {
  const [students, setStudents] = useState([]);

  const getStudData = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(URL)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  }


  useEffect(() => getStudData(), [])


return (
  <div className="container">
        <Horas data={students}/>    
  </div>
)

};


