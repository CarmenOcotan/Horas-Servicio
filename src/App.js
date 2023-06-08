import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Horas from './componentes/Horas-servicio';
import Navb from './componentes/Nav';
import Nav2 from './componentes/Nav2';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Nav2/>
      <Horas/>
    </div>
  );
}

export default App;
