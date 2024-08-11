import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
<<<<<<< HEAD
import Compra from "./components/Header/index"
=======
import Carousel from './components/Carousel';
import Comprar from './components/Comprar'
import { useRef } from 'react';
>>>>>>> 372687d5e03a6502032b7957d9a845915e5ab71e

function App() {
  // Link para o section compra
  const refCompra = useRef(null);
  
  const handleClickCompra = () => {
    refCompra.current?.scrollIntoView({behavior: 'smooth'})
  };




  return (
    <>
<<<<<<< HEAD
      <Header></Header>
      <Compra></Compra>
=======
      <div className="body">
        <Header compra={handleClickCompra} ></Header>
        <Carousel></Carousel>
        <Comprar ref={refCompra}></Comprar>
      </div>
>>>>>>> 372687d5e03a6502032b7957d9a845915e5ab71e
    </>
  )
}

export default App
