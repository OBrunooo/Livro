import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Comprar from './pages/comprar/Comprar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/comprar' element={<Comprar />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
