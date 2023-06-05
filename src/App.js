import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Horas from './componentes/Horas-servicio';
import Navb from './componentes/Nav';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Horas/>
    </div>
  );
}

export default App;
