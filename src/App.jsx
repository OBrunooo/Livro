import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Comprar from './pages/comprar/Comprar';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/as' element={<Home />}/>
        <Route path='/' element={<Comprar />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
