import React from "react";
import {Row, Container, Col, Button } from "react-bootstrap";


import "./Capacity.scss";
export default function Capacity() {
  return (
    <Container className="capacity" fluid>
      <Row md={12} className="capacity_titulo">
          <span> <b>Capacitación</b> </span>
       </Row>
       <Row md={12} className="capacity_sub" fluid>
            <span>Conocenos antes de empezar</span>
       </Row>
       <div className="separacion"></div>
       <div className="separacion"></div>
      

      <Row className="center">
        <Col sm={11} md={3} className="capacity_ext">
             <span className="titul">Seguridad y Higiene</span>

          <div className="capacity_contenedor">
          <iframe width="280" height="200" src="https://www.youtube.com/embed/xkKwLq8rR8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Button className="capacity_subtitulo">Comenzar Curso</Button>
        </Col>
        <Col sm={11} md={3} className="capacity_ext">
        <span className="titul">Ética</span>
          <div className="capacity_contenedor">
          <iframe width="280" height="200" src="https://www.youtube.com/embed/9n40IM8IFK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <Button className="capacity_subtitulo">Comenzar Curso</Button>
         </Col>
        <Col sm={11} md={3} className="home_ext">
        <span className="titul">Licencias</span>
          <div className="capacity_contenedor">
          <iframe width="280" height="200" src="https://www.youtube.com/embed/7laodN5DoT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
              </div>
              <Button className="capacity_subtitulo">Comenzar Curso</Button>
            </Col>
          </Row>
    </Container>
  );
}


