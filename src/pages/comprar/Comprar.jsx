import './comprar.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Sidebar from './container/Sidebar'
import Books from './container/Books'


const Comprar = () => {
    return (
        <>
        <Header></Header>
        <div className="bodyComprar">
            <div className="comprarContainer row">
                <div className="col-lg-2 col-12 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-10 p-0">
                    <Books></Books>
                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Comprar