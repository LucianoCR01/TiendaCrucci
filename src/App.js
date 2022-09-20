import NavBar from './components/NavBar';
import Card from './components/Card';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Computadoras from './components/Computadoras/Computadoras';
import Teclados from './components/Teclados/Teclados';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Card className='divBody'/>}/>
        <Route path='Contacto' element={<div>Contacto</div>}/>
        <Route path='Computadoras' element={<Computadoras/>}/>
        <Route path='Teclados' element={<Teclados/>}/> 
        <Route path='detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
