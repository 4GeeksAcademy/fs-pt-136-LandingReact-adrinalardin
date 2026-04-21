import React from "react";

// Componentes
import Navbar from "./Navbar";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";

// Imagenes
import imagenYamaha from "../../img/Yamaha-YZF-R1-7.png"
import imagenHonda from "../../img/Honda-CBR-1100-XX-Blackbird-2.jpg"
import imagenKawasaki from "../../img/kawasaki 1200 zx-12r.jpg"
import imagenSuzuki from "../../img/Suzuki-GSX-1300-R-Hayabusa-1999-700px.webp"


const Home = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<div className="row justify-content-center gap-4 mb-4">
				<div className="col-5">
					<Card imagen={imagenYamaha} titulo="Yamaha YZF-R1" descripcion="La Yamaha YZF-R1 es una superbike legendaria presentada en 1998 que marcó un antes y un después en el segmento. Equipada con un motor de 4 cilindros en línea de 998 cc, ofrecía una potencia muy elevada en un chasis compacto y ligero, lo que le daba una relación peso-potencia excepcional. Su diseño agresivo y su enfoque en el rendimiento la convirtieron en una de las motos más influyentes de su época, destacando tanto en carretera como en circuito." enlace="https://www.yamaha-motor.eu/es/es/about-us/our-history/iconic-eu-products/1990/1998-yzf-r1/" />
				</div>
				<div className="col-5">
					<Card imagen={imagenHonda} titulo="Honda CBR1100XX Super Blackbird" descripcion="La Honda CBR1100XX Super Blackbird es una motocicleta sport-touring lanzada en 1996 que se hizo famosa por ser, en su momento, la moto de producción más rápida del mundo. Cuenta con un motor de 4 cilindros en línea de 1.137 cc, que combina gran potencia con una entrega suave y controlable. A diferencia de las superbikes más radicales, la Blackbird apostaba por el equilibrio entre velocidad, estabilidad y comodidad, lo que la hacía ideal tanto para altas velocidades en carretera como para viajes largos." enlace="https://www.motoplanete.es/honda/176/CBR-1100-XX-Super-Blackbird-1997/contact.html" />
				</div>
			</div>	
			<div className="row justify-content-center gap-4">
				<div className="col-5">
					<Card imagen={imagenKawasaki} titulo="Kawasaki Ninja ZR-12R" descripcion="La Kawasaki Ninja ZX-12R es una motocicleta deportiva lanzada en el año 2000 como respuesta directa a la guerra de las motos más rápidas. Equipada con un potente motor de 4 cilindros en línea de 1.199 cc, ofrecía una aceleración brutal y una velocidad punta impresionante, compitiendo con modelos como la Hayabusa. Destacaba por su chasis rígido, su estabilidad a altas velocidades y su diseño aerodinámico avanzado para la época. Aunque muy enfocada al rendimiento, también mantenía cierto nivel de confort, situándose a medio camino entre una superbike pura y una sport-touring de altas prestaciones." enlace="https://www.motoplanete.es/kawasaki/170/1200-ZX-12R-2000/contact.html" />
				</div>
				<div className="col-5">
					<Card imagen={imagenSuzuki} titulo="Suzuki Hayabusa" descripcion="La Suzuki Hayabusa es una motocicleta deportiva icónica lanzada a finales de los años 90 que revolucionó el mundo de las superbikes. Destaca por su motor de 4 cilindros en línea de 1.299 cc, capaz de superar los 300 km/h, lo que la convirtió en una de las motos de producción más rápidas de su época. Su diseño aerodinámico, con líneas suaves y carenado envolvente, fue clave para alcanzar esas velocidades. Además, ofrecía una combinación poco común de potencia extrema y cierta comodidad para viajes largos, lo que la hizo muy popular entre los aficionados a la velocidad." enlace="https://www.motoplanete.es/suzuki/197/1300-GSX-R-Hayabusa-1999/contact.html" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;