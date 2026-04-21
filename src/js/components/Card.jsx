import React from "react";


const Card = ({imagen, titulo, descripcion, enlace}) => {
    return (
        <div className="carta d-flex flex-column gap-4 my-4 p-3 h-100">
            <img className="d-block mx-auto" src={imagen} alt={titulo} />
            <title>{titulo}</title>
            <p>{descripcion}</p>
            <a href={enlace} className="text-decoration-none">
                <button className="btn btn-primary d-block mx-auto">Más info</button>
            </a>
        </div>
    );
};

export default Card;