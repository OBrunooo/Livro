import Styles from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import { FaBookOpen } from "react-icons/fa6";

const Header = () => {
    return (
        <Navbar fixed="top" data-bs-theme="dark" expand="sm" className={Styles.container}>
            <Container className={Styles.container}>
                <Navbar.Brand className={Styles.title} >
                    Livro <FaBookOpen /> 
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link className={Styles.text}> <Link to={'/comprar'} className={Styles.link} >Compra</Link></Nav.Link>
                        <Nav.Link className={Styles.text}> <Link to={'/'} className={Styles.link} >Venda</Link></Nav.Link>
                        <Nav.Link className={Styles.text}> <Link to={'/'} className={Styles.link} >Doação</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header