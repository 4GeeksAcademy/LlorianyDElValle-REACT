// importar React y los íconos que necesito
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="mb-3">
          <a href="#" className="text-white me-3 fs-4">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white me-3 fs-4">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <p className="mb-1 small">
          <FontAwesomeIcon icon={faPhone} /> +34 600 5555 5555
        </p>
        <p className="mb-3 small">
          <FontAwesomeIcon icon={faEnvelope} /> info@creta-holidays.com
        </p>
        <p className="mb-0 small">&copy; 2026 Creta Holidays. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

// no olvidar exportar
export default Footer;