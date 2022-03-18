import React, { useEffect, useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import userFound from "../../assets/user.png";
import imgComenzamos from "../../assets/comenzamos.svg";
import imgAccesos from "../../assets/misaccesos.svg";
import imgNosotros from "../../assets/nosotros.svg";

import "./Home.scss";
export default function Home() {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [userFile, setLegajo] = useState("");
  const [email, setCorreo] = useState("");
  const [avatar, setAvatar] = useState(userFound);
  useEffect(() => {
    setName(user.name);
    setLegajo(user.userFile);
    setCorreo(user.email);
    setAvatar(user.avatar);
  }, [user]);
  return (
    <Container className="home" fluid>
      <Row md={12} className="home_titulo">
        <span>Bienvenido al mundo Telecom</span>
      </Row>
      <Row md={12} className="home_seccion">
        <Col md={6} className="home_seccion_foto">
          <img className="home_seccion_foto--img" src={avatar} alt="icoLogo" />
        </Col>
        <Col md={6} className="home_seccion_datos">
          <Row>{name}</Row>
          <Row>
            <div className="sp-0">
              <span>Legajo:</span>
              <span>{userFile}</span>
            </div>
          </Row>
          <Row>
            <div className="sp-0">
              <span>mail:</span>
              <span>{email}</span>
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
              src={imgNosotros}
              alt="nosotros"
            />
          </div>
          <Button className="home_subtitulo"><Link to="/abouts">Sobre Nosotros </Link></Button>
        </Col>
        <Col sm={11} md={3} className="home_ext">
          <div className="home_contenedor">
            <img
              className="home_seccion_foto--img"
              src={imgAccesos}
              alt="accesos"
            />
          </div>
          <Button className="home_subtitulo"><Link to="/access">Mis Accesos </Link></Button>
        </Col>
        <Col sm={11} md={3} className="home_ext">
          <div className="home_contenedor">
            <img
              className="home_seccion_foto--img"
              src={imgComenzamos}
              alt="comienzo"
            />
          </div>
          <Button className="home_subtitulo"><Link to="/capacity">Como Comienzo? </Link></Button>
        </Col>
      </Row>
    </Container>
  );
}
