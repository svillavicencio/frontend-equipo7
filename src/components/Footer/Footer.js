import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__redesSociales">
        <li>
          <FontAwesomeIcon
            className="footer__animacionRedes"
            icon={faFacebook}
            size="2x"
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="footer__animacionRedes"
            icon={faInstagram}
            size="2x"
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="footer__animacionRedes"
            icon={faEnvelope}
            size="2x"
          />
        </li>
      </ul>
      <div className="footer__autor">Copyright © By Equipo7</div>
    </div>
  );
}
