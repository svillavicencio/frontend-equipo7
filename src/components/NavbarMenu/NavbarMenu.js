import React from "react";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

export default function NavBarMenu() {
  return (
    <>
      <Navbar expand="lg" className="navBarMenu">
        <Link to="/"></Link>
        <Container className="ContainerNavbar">
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Inicio</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Nosotros</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Mis Accesos</NavLink>
          </Navbar.Brand>
          <Navbar.Brand className="FormatText">
            <NavLink to="/">Comenzamos</NavLink>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
