import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './componentes/Nav';
import Nav2 from './componentes/Nav2';
import Students from './componentes/StudentsData.js/StudentsData';


function Inicio() {
    return (
        
        <div className="App">
            <Navb/>
            <Nav2/>      
            <Students/>
        </div>
    );
}

export default Inicio;