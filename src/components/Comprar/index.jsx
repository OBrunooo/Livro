
import { forwardRef } from "react"
import Styles from "./Comprar.module.css"
import CompraImg from "./img/compra.png"

const Comprar = ({props},ref) => {
    return(
        <>
        <div className={Styles.div}></div>
        <div ref={ref} className={Styles.container}>
            <div className="row">
                <div className=" col-md-7">
                    <div className="row">
                        <div className="col">
                            <h3 className={Styles.title}>Compre novos livros para a sua estante !!!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className={Styles.text} >Mergulhe em um mundo de histórias com nosso acervo de livros novos e usados, com descontos que você não vai resistir. Encontre clássicos atemporais, best-sellers aclamados, lançamentos imperdíveis e muito mais, para todos os gostos e estilos.</p>
                            <ul>
                                <li className={Styles.text} >Livros novos em diversas categorias e autores;</li>
                                <li className={Styles.text} >Opções de livros usados em ótimo estado para economizar;</li>
                            </ul>
                            <div className={Styles.divRButton} >
                                <button className={Styles.button + " btn btn-primary btn-lg"}>Comprar Livros</button>   
                            </div>  
                        </div>
                    </div>
                </div>
                <div className={Styles.divImg + "  col-md-5"}>
                    <img className={Styles.img} src={CompraImg}></img>
                    <div className={Styles.divLButton} >
                        <button className={Styles.button + " btn btn-primary btn-lg"}>Comprar Livros</button>   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default forwardRef(Comprar);