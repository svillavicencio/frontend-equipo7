import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Header.scss';
import logoUrl from '../../assets/Logo.jpg';
import NavBarMenu from '../NavbarMenu/NavbarMenu'
export default function Header() {
  
    if (window.location.pathname === '/') return null;
    const displayHeader = () => {
      return <div className="header">
        <Container>
          <Row>
            <Col xs={2}><img src={logoUrl} alt="Teco" /></Col>
            <Col xs={8}>
            <>
              <NavBarMenu />
            </>
            </Col>
            <Col xs={2}>LogOut</Col>
          </Row>
        </Container>
        </div>
      };
    return (
    <header>
      {displayHeader()}    
    </header>
    )      
} 
//export default Header;

