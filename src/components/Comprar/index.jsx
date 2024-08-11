
import { forwardRef } from "react"
import Styles from "./Comprar.module.css"
import CompraImg from "./img/compra.png"

const Comprar = ({props},ref) => {
    return(
        <>
        <div className={Styles.div}></div>
        <div ref={ref} className={Styles.container+" container"}>
            <div className="row">
                
                <div className="col-sm-12 col-md-6">
                    <div className="row">
                        <div className="col">
                            <h3 className={Styles.title}>Compre novos livros para a sua estante !!!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <p>Mergulhe em um mundo de histórias com nosso acervo de livros novos e usados, com descontos que você não vai resistir. Encontre clássicos atemporais, best-sellers aclamados, lançamentos imperdíveis e muito mais, para todos os gostos e estilos.</p>
                            <ul className="p-3 pt-0">
                                <li>Livros novos em diversas categorias e autores;</li>
                                <li>Opções de livros usados em ótimo estado para economizar;</li>
                            </ul>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img className={Styles.img} src={CompraImg}></img>
                </div>
            </div>
        </div>
        <div className={Styles.div}></div>
        </>
    )
}

export default forwardRef(Comprar);