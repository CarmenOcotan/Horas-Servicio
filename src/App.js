import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Horas from './componentes/Horas-servicio';
import Navb from './componentes/Nav';
import Students from './componentes/StudentsData.js/StudentsData';

function App() {
  return (
    <div className="App">
      <Navb/>
      
      <Students/>
      
    </div>
  );
}

export default App;
