import { forwardRef } from "react"
import Styles from "./Venda.module.css"
import vendaImg from "./img/venda.png"

const Venda = ({props},ref) => {
    return(
        <>
        <div className={Styles.div}></div>
        <div ref={ref} className={Styles.container}>
            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col">
                            <h3 className={Styles.title}>Dê uma nova vida aos seus livros!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className={Styles.text}>
                            Está com livros empoeirados na estante? Livros que você já leu e ama, mas que ocupam espaço precioso e merecem uma nova casa?<br/>
                            Dê a eles uma segunda chance! Aqui você pode vender seus livros usados e dar espaço para novos, conectando-se com outros amantes da leitura que buscam exatamente o que você tem para oferecer.<br/>
                            Encontre um novo lar para seus livros e faça espaço para novas aventuras literárias!
                            </p>
                            <ul>
                                <li className={Styles.text}>Venda rápida e fácil;</li>
                                <li className={Styles.text}>Alcance um público apaixonado;</li>
                                <li className={Styles.text}>Segurança e praticidade.</li>
                            </ul>
                            <div className={Styles.divRButton} >
                                <button className={Styles.button + " btn btn-primary btn-lg"}>Vender Livros</button>   
                            </div>  
                        </div>
                    </div>
                </div>
                <div className={Styles.divImg + " col-md-5"}>
                    <img className={Styles.img} src={vendaImg}></img>
                    <div className={Styles.divLButton} >
                        <button className={Styles.button + " btn btn-primary btn-lg"}>Vender Livros</button>   
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default forwardRef(Venda);