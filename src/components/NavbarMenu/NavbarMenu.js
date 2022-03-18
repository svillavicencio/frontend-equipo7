import React from "react";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logoUrl from "../../assets/Logo.jpg";

export default function NavBarMenu() {
  return (
    <>
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/home">
              <img src={logoUrl} alt="Teco" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0">
              <Navbar.Brand className="FormatText">
                <NavLink to="/home">Inicio</NavLink>
              </Navbar.Brand>
              <Navbar.Brand className="FormatText">
                <NavLink to="/abouts">Nosotros</NavLink>
              </Navbar.Brand>
              <Navbar.Brand className="FormatText">
                <NavLink to="/access">Mis Accesos</NavLink>
              </Navbar.Brand>
              <Navbar.Brand className="FormatText">
                <NavLink to="/capacity">Comenzamos</NavLink>
              </Navbar.Brand>
            </Nav>
            <Nav className="d-flex">
              <Navbar.Brand className="FormatText">
                <NavLink to="/">Logout</NavLink>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
