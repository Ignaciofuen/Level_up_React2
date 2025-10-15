import React from 'react'
import { useAuth } from '../auth/AuthContext'
import {Navbar, Nav, NavDropdown, Container,Badge} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'

export default function AppNavbar ({ cartItems }) {
  const { user, logout } = useAuth()

    return (
    <Navbar fixed='top' collapseOnSelect expand="lg" variant = "dark"className="bg-custom navbar-level-up" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Level Up Gamer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/Productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Usuario" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/login">Iniciar sesion</NavDropdown.Item>
              <NavDropdown.Item href="/registro">Registrarse</NavDropdown.Item>
              <NavDropdown.Item href="/admin">Administrador</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
              {' '}
              <Badge className='contador'bg='green' >
                {cartItems.length}
              </Badge>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );        
    

}