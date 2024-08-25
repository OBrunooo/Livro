import { forwardRef } from "react"
import Styles from "./Doacao.module.css"
import imgDoacao from "./img/doacao.jpg"
const Doacao = ({props}, ref) => {
    return(
        <><div ref={ref} className={Styles.doacao}>
            <div className={Styles.div}></div>
            <div className={Styles.container}>
                <div className="row" >
                    <h2 className={Styles.title}>Doações</h2>
                    <p>Doar para instituições que promovem a leitura é investir em um futuro mais brilhante. Através de bibliotecas comunitárias, projetos de incentivo à leitura e programas de alfabetização, podemos garantir que todos tenham acesso ao conhecimento e às oportunidades que a leitura proporciona.</p>
                </div>
                <div className={Styles.containerImg + " row"}>
                    <a className="p-0" href="">
                        <img className={Styles.img} src={imgDoacao} alt="" />
                        <div className={Styles.containerButton} >
                            <button className={Styles.button} >Contribuir</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default forwardRef(Doacao)