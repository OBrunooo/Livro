import Carousel from 'react-bootstrap/Carousel';
import Styles from "./Carousel.module.css"
import Compra from "./img/compra.jpg"
import Venda from "./img/venda.jpg"
import Doacao from "./img/doacao.jpg"


const Teste = () => {
    return (
        <Carousel>
            <Carousel.Item interval={8000}>
                <img 
                className={Styles.image}
                src={Compra}
                >
                </img>
                <Carousel.Caption>
                    <h3>Comprar</h3>
                    <p>Adicione novos livros a sua estante</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img 
                className={Styles.image}
                src={Venda}
                >
                </img>
                <Carousel.Caption>
                    <h3>Venda</h3>
                    <p>Quer liberar espaço na sua estante? Então este é o lugar !</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img 
                className={Styles.image}
                src={Doacao}
                >
                </img>
                <Carousel.Caption>
                    <h3>Doações</h3>
                    <p>Seja um doador de livros</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Teste