import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Teste from './pages/teste/Teste';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/teste' element={<Teste />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
