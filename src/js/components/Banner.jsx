import React from "react";


const Banner = () => {
    return (
        <section className="banner container my-4 p-5">
            <h1>Pacto Japonés</h1>
            <p>
                El "pacto de caballeros" japonés (hacia el año 2000) fue un acuerdo entre Honda, Kawasaki, Suzuki y Yamaha para limitar electrónicamente la velocidad máxima de sus motos de serie a 299-300 km/h. El objetivo fue evitar la presión regulatoria y las restricciones gubernamentales ante el aumento de la peligrosidad por la guerra de velocidad, iniciada en gran parte por la Suzuki Hayabusa.
            </p>
            <a href="https://www.motorpasionmoto.com/deportivas/hace-30-anos-marcas-japonesas-llegaron-a-pacto-ninguna-moto-superaria-300-km-h-entonces-llego-suzuki-hayabusa-a-casi-450-km-h">
                <button className="btn btn-primary">Leer más</button>
            </a>
        </section>
    );
};

export default Banner;