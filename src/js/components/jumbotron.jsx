// primero importo React
import React from "react";

const Jumbotron = () => {
  return (
    <div className="container p-5 mb-3 bg-light mt-5 rounded-3">
      <h1 className="display-5 fw-bold">Bienvenido a Creta</h1>
      <p className="fs-4">
        Descubre las mejores playas y experiencias en tus vacaciones soñadas.
        Creta te espera con su belleza natural, cultura y hospitalidad.
        Reserva ahora y vive momentos inolvidables en la isla de Creta.
      </p>
      <button className="btn btn-primary btn-lg" type="button">
        Reserva ahora
      </button>
    </div>
  );
};

// no me puedo olvidar de exportar, si no, no vale en otro archivo
export default Jumbotron;