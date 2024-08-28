import './App.css'
import { useRef } from 'react';
import Header from "./components/Header"
import Carousel from './components/Carousel';
import Comprar from './components/Comprar'
import Venda from './components/Venda';
import Doacao from './components/Doacao';
import Footer from './components/Footer';


function Home() {
  // Link para o section compra
  const refCompra = useRef(null);
  const handleClickCompra = () => {
    refCompra.current?.scrollIntoView({behavior: 'smooth'})
  };
  const refVenda = useRef(null);
  const handleClickVenda = () => {
    refVenda.current?.scrollIntoView({behavior: 'smooth'})
  };

  const refDoacao = useRef(null);
  const handleClickDoacao = () => {
    refDoacao.current?.scrollIntoView({behavior: 'smooth'})
  };


  
  return (
    <>
      <div className="body">
        <Header compra={handleClickCompra} venda={handleClickVenda} doacao={handleClickDoacao}></Header>
        <Carousel></Carousel>
        <Comprar ref={refCompra}></Comprar>
        <Venda ref={refVenda}></Venda>
        <Doacao ref={refDoacao}></Doacao>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
