import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import userFound from "../../assets/user.png";
import imgPrueba from "../../assets/prueba.png";

import "./Home.scss";
export default function Home() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [legajo, setLegajo] = useState("");
  const [correo, setCorreo] = useState("");
  useEffect(() => {
    setName(user.name);
    setLegajo(user.legajo);
    setCorreo(user.correo);
  }, [user]);
  console.log(user);
  return (
    <Container className="home" fluid>
      <Row md={12} className="home_titulo">
        <span>Bienvenido al mundo Telecom</span>
      </Row>
      <Row md={12} className="home_seccion">
        <Col md={6} className="home_seccion_foto">
          <img
            className="home_seccion_foto--img"
            src={userFound}
            alt="icoLogo"
          />
        </Col>
        <Col md={6} className="home_seccion_datos">
          <Row>{name}</Row>
          <Row>
            <div className="sp-0">
              <span>Legajo:</span>
              <span>{legajo}</span>
            </div>
          </Row>
          <Row>
            <div className="sp-0">
              <span>mail:</span>
              <span>{correo}</span>
            </div>
          </Row>
        </Col>
      </Row>
      <div className="separacion"></div>
      <Row className="center">
        <Col sm={11} md={3} className="home_ext">
          <div className="home_contenedor">
            <img
              className="home_seccion_foto--img"
              src={imgPrueba}
              alt="nosotros"
            />
          </div>
          <Button className="home_subtitulo">Sobre Nosotros</Button>
        </Col>
        <Col sm={11} md={3} className="home_ext">
          <div className="home_contenedor">
            <img
              className="home_seccion_foto--img"
              src={imgPrueba}
              alt="accesos"
            />
          </div>
          <Button className="home_subtitulo">Mis Accesos</Button>
        </Col>
        <Col sm={11} md={3} className="home_ext">
          <div className="home_contenedor">
            <img
              className="home_seccion_foto--img"
              src={imgPrueba}
              alt="comienzo"
            />
          </div>
          <Button className="home_subtitulo">Como Comienzo?</Button>
        </Col>
      </Row>
    </Container>
  );
}
