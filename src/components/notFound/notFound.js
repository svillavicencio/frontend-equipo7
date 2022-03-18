import React from "react";
import { Button } from "react-bootstrap";
import notfound from "../../assets/404found.gif";

import "./notfound.scss";
export default function notFound() {
  return (
    <div className="notFound">
      <img src={notfound} />
      <Button>Ir a Inicio</Button>
    </div>
  );
}
