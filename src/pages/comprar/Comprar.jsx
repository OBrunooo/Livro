import './comprar.css'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Sidebar from './container/Sidebar'
import Books from './container/Books'


const Comprar = () => {
    return (
        <>
        <div className="bodyComprar">
            <Header></Header>
            <div className="row">
                <div className="col-md-2 col-12 p-0">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <Books></Books>
                </div>
                <div className="col-md-2"></div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Comprar