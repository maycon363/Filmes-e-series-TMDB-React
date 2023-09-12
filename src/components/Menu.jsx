import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css';

const Menu = () => {
    return (
        <div>
            <Navbar variant="dark" className="mb-3">
                <Container>
                    <Navbar.Brand href="/filmes/populares">Inicio</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavDropdown id="nav-dropdown-dark" title="Filmes" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/populares">Populares</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/lancamentos">Lançamentos</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/cartaz">Cartaz</Link>                               
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/filmes/ultimoAdicionado">Último Cadastrado</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown id="nav-dropdown-dark" title="Séries" menuVariant="dark">
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/">Populares</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/series/no-ar">No Ar</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className="nav-link" >
                                <Link className="nav-link" to="/series/estrelando-hoje">Estrelando Hoje</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                       
                        <Link className="nav-link" to="/ator">Ator detalhes</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu