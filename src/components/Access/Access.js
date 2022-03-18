import React, { useEffect, useState } from "react";
//import { Row, Container, Col, Button } from "react-bootstrap";
import { Row, Container, Col } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import userFound from "../../assets/user.png";
//import imgPrueba from "../../assets/data1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import "./Access.scss";

export default function Access() {
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
    <>
      <Container id={userFile} className="access" fluid>
        <Row md={12} className="access_titulo">
          <span>Mis Accesos</span>
        </Row>
        <Row md={12} className="access_seccion nt">
          <Col md={3} className="access_seccion_foto">
            <img
              className="access_seccion_foto--img"
              src={avatar}
              alt="icoLogo"
            />
          </Col>
          <Col md={3} className="access_seccion_datos">
            <Row>{name}</Row>
            <Row>
              <div className="sp-0">
                <span>mail:</span>
                <span>{email}</span>
              </div>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <div className="sp-0 nx ">
                <a
                  className="nt"
                  href="https://smart.telecom.com.ar/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>Conoce nuestro Equipo</span>
                  <FontAwesomeIcon icon={faRightFromBracket} size="2x" />
                </a>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="center">
          <Col sm={11} md={3} className="access_ext">
            <h3>Mi Puesto</h3>
            <div className="access_contenedor">
              <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Legajo</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Rol</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Gerencia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col sm={11} md={3} className="access_ext">
            <h3>Datos Personales</h3>
            <div className="access_contenedor">
              <span>mail:</span>
              <span>{email}</span>
            </div>
          </Col>
          <Col sm={11} md={3} className="access_ext">
            <h3>Tools</h3>
            <div className="access_contenedor">
              <span>mail:</span>
              <span>{email}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
