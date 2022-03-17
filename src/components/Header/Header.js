import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Header.scss';
import logoUrl from '../../assets/Logo.jpg';

export default function Header() {
  return (

    <div className="header">
    <Container>
      <Row>
        <Col xs={2}><img src={logoUrl} alt="Teco" /></Col>
        <Col xs={8}>MENU (wider)</Col>
        <Col xs={2}>LogOut</Col>
      </Row>
    </Container>

  </div>
  )  
}

//export default Header;

