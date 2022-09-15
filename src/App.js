import logo from './logo.svg';
import './App.css';
import Button from './components/Buttons';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import 'bulma/css/bulma.min.css';


 
function App() {
  const handleClick =() => {
    alert('Cancelar');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
      </Routes>
    </BrowserRouter>
    
      
        // <Button text='Guardar' onClick={()=> alert('Me hicieron click ')}/> la funcion se declara directamente aca
        // <Button text='Cancelar' onClick={handleClick}/> se llama a una funcion declarada mas arriba 
      
    
  );
}

export default App;
