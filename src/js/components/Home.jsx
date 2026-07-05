import React from "react";

//include images into your bundle
import chania from "../../img/chania.jpg";
import elafonisi from "../../img/elafonisi.jpg";
import heraklion from "../../img/heraklion.jpg";
import cuevaDAgioGioigio from "../../img/cueva d agio gioigio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
// traer mi jumbotron
import Jumbotron from "./jumbotron";
// traer mi card
import Card from "./card";
// traer mi footer
import Footer from "./footer";

//create your first component
const Home = () => {
  return (
    <>
      <nav id="inicio" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faUmbrellaBeach} /> <strong>CRETA-HOLIDAYS</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#inicio">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAbout" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Jumbotron />

      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-lg-3">
            <Card img={chania} titulo="Chania" texto="Chania es una ciudad costera encantadora en la costa norte de Creta. Con su puerto pintoresco, calles empedradas y una vibrante vida nocturna, es un excelente base para explorar la isla." />
          </div>
          <div className="col-12 col-lg-3">
            <Card img={heraklion} titulo="Heraklion" texto="Heraklion, la capital de Creta, combina historia y vida moderna. Aquí se encuentra el legendario Palacio de Knossos, cuna de la civilización minoica, junto a un puerto veneciano, mercados llenos de sabores locales y un ambiente vibrante día y noche." />
          </div>
          <div className="col-12 col-lg-3">
            <Card img={cuevaDAgioGioigio} titulo="Cueva de Agio Giorgio" texto="La Cueva de Agio Giorgio es un sitio natural impresionante en la costa sur de Creta. Con sus aguas cristalinas y paisajes deslumbrantes, es un destino perfecto para buceo y relajación." />
          </div>
          <div className="col-12 col-lg-3">
            <Card img={elafonisi} titulo="Elafonisi" texto="Elafonisi es una isla paradisíaca con playas de arena blanca y aguas turquesas. Es un lugar ideal para aquellos que buscan tranquilidad y belleza natural en medio del mar Egeo." />
          </div>
        </div>
      </div>

      <Footer />

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasAbout" aria-labelledby="offcanvasAboutLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasAboutLabel">Sobre Creta Holidays</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>
            En Creta Holidays llevamos más de 10 años ayudando a viajeros a descubrir
            la magia de la isla de Creta. Desde las aguas turquesas de Elafonisi hasta
            los rincones históricos de Chania y Heraklion, diseñamos experiencias a
            medida para que cada viaje sea inolvidable.
          </p>
          <p>
            Nuestro equipo local conoce cada rincón de la isla: playas escondidas,
            tabernas familiares y rutas de senderismo que no aparecen en las guías
            turísticas.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;