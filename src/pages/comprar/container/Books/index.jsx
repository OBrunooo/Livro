import ItensBook from "../../../../data/livros"
import Styles from "./Books.module.css"
const Books = () => {
    return (
        <div className={Styles.container}>
            {ItensBook.map((item) => (
                <div className={Styles.book}>
                    <div className={Styles.imgContainer}>
                        <img className={Styles.img} src={item.imageUrl} alt="" />
                    </div>
                    <div className={Styles.textContainer}>
                        <div className={Styles.infoContainer}>
                            <p className={Styles.title}>{item.name}</p>
                            <p className={Styles.autor}>{item.autor}</p>
                        </div>
                            <p className={Styles.price}>R${item.price}</p>
                        <div className={Styles.buttonContainer}>
                            <button className={Styles.button}>Adicionar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Books