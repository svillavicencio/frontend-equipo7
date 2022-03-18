import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Abouts.scss";

export default function Abouts() {
  return (
    <Container fluid className="about_contenedor">
      <Row md={12} className="about_titulo">
        <span>Nos pone felices que formes parte del mundo Telecom</span>
      </Row>
      <Row className="about_parrafo">
        <Col lg={12} md={12} sm={12}>
          <p>
            Deserunt amet proident reprehenderit laboris mollit ex commodo
            cupidatat nulla quis in. Nisi proident Lorem incididunt officia
            officia proident cupidatat est do aliquip ea eu enim irure. Velit
            nisi et non eu eiusmod laboris exercitation incididunt consectetur
            consequat. Ex Lorem magna officia duis amet anim labore elit mollit.
            Et nostrud in amet Lorem velit veniam quis fugiat. Non aute in
            exercitation tempor exercitation Lorem Lorem adipisicing fugiat est
            consectetur proident fugiat.
          </p>
        </Col>
      </Row>
      <div className="about_section"></div>
      <Row className="about_center">
        <Col lg={7} md={6} sm={12}>
          <span className="about_section--titulo">Cultura Organizacional</span>
          <p about_section--parrafo>
            Deserunt amet proident reprehenderit laboris mollit ex commodo
            cupidatat nulla quis in. Nisi proident Lorem incididunt officia
            officia proident cupidatat est do aliquip ea eu enim irure. Velit
            nisi et non eu eiusmod laboris exercitation incididunt consectetur
            consequat.Deserunt amet proident reprehenderit laboris mollit ex
            commodo cupidatat nulla quis in. Nisi proident Lorem incididunt
            officia officia proident cupidatat est do aliquip ea eu enim irure.
            Velit nisi et non eu eiusmod laboris exercitation incididunt
            consectetur consequat.
          </p>
        </Col>
        <Col lg={5} md={6} sm={12} className="about_ext">
          <div className="about_contenedor--video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rr_VKyWX9WQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <div className="about_section"></div>
      <Row className="about_center">
        <Col lg={7} md={6} sm={12}>
          <span className="about_section--titulo">Mision y Vision</span>
          <p about_section--parrafo>
            Deserunt amet proident reprehenderit laboris mollit ex commodo
            cupidatat nulla quis in. Nisi proident Lorem incididunt officia
            officia proident cupidatat est do aliquip ea eu enim irure. Velit
            nisi et non eu eiusmod laboris exercitation incididunt consectetur
            consequat. Deserunt amet proident reprehenderit laboris mollit ex
            commodo cupidatat nulla quis in.
          </p>
        </Col>
        <Col lg={5} md={6} sm={12} className="about_ext">
          <div className="about_contenedor--video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VC5nUToiD4c"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <div className="about_section"></div>
      <Row className="about_center">
        <Col lg={7} md={6} sm={12}>
          <span className="about_section--titulo">
            Progreso a travéz de los Años
          </span>
          <p about_section--parrafo>
            Deserunt amet proident reprehenderit laboris mollit ex commodo
            cupidatat nulla quis in. Nisi proident Lorem incididunt officia
            officia proident cupidatat est do aliquip ea eu enim irure. Velit
            nisi et non eu eiusmod laboris exercitation incididunt consectetur
            consequat. Deserunt amet proident reprehenderit laboris mollit ex
            commodo cupidatat nulla quis in. Nisi proident Lorem incididunt
            officia officia proident cupidatat est do aliquip ea eu enim irure.
            Velit nisi et non eu eiusmod laboris exercitation incididunt
            consectetur consequat.Deserunt amet proident reprehenderit laboris
            mollit ex commodo cupidatat nulla quis in.
          </p>
        </Col>
        <Col lg={5} md={6} sm={12} className="about_ext">
          <div className="about_contenedor--video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/mkDkO67gUjc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
