import './App.css';
import ListaEmpresas from './components/listado-empresas';
import ResumenEmpresas from './components/resumen-empresas';

import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<ResumenEmpresas/>}/>
        <Route path="/b" element = {<ListaEmpresas/>}/>

      </Routes>
      <ResumenEmpresas>

      </ResumenEmpresas>
      <ListaEmpresas></ListaEmpresas>
    </div>
  );
}

export default App;
