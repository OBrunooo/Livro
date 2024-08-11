import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import Carousel from './components/Carousel';
import Comprar from './components/Comprar'
import { useRef } from 'react';

function App() {
  // Link para o section compra
  const refCompra = useRef(null);
  
  const handleClickCompra = () => {
    refCompra.current?.scrollIntoView({behavior: 'smooth'})
  };




  return (
    <>
      <div className="body">
        <Header compra={handleClickCompra} ></Header>
        <Carousel></Carousel>
        <Comprar ref={refCompra}></Comprar>
      </div>
    </>
  )
}

export default App
