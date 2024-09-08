import ItensBook from "../../../../data/livros"
import Styles from "./Books.module.css"
import { FaPlus } from "react-icons/fa";

const Books = () => {
    return (
        <div className={Styles.container}>
            {ItensBook.map((item) => (
                <div className={Styles.book}>
                    <div className={Styles.imgContainer}>
                        <img className={Styles.img} src={item.imageUrl} alt="" />
                        <button className={Styles.buttonAdd}><FaPlus className={Styles.icon}></FaPlus><span className={Styles.price}>{item.price}</span></button>
                    </div>
                    <div className={Styles.textContainer}>
                        <p className={Styles.title}>{item.name}</p>
                        <div className={Styles.autorPrice}>
                            <p className={Styles.autor}>{item.autor}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Books