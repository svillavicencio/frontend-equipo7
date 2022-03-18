import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.scss";
import NavBarMenu from "../NavbarMenu/NavbarMenu";

export default function Header() {
  if (window.location.pathname === "/") return null;
  const displayHeader = () => {
    return (
      <div className="header">
        <Container>
          <Row>
            <Col xs={12}>
              <>
                <NavBarMenu />
              </>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  return <header>{displayHeader()}</header>;
}
//export default Header;
