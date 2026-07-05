// importar React y lo que necesite
import React from "react";

const Card = (props) => {
  return (
    <div className="card w-100">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.texto}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

// no olvidar exportar
export default Card;