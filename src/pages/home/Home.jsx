import './home.css'
import Header from '../../components/Header';
import Carousel from "./container/Carousel"
import Comprar from './container/Comprar'
import Venda from './container/Venda';
import Doacao from './container/Doacao';
import Footer from '../../components/Footer';


const Home = () => {
  
  return (
    <>
    <div className='body'>
      <Header></Header>
      <Carousel></Carousel>
      <Comprar ></Comprar>
      <Venda ></Venda>
      <Doacao></Doacao>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Home
