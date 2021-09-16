import React, { useState } from "react";

const Semaforo = () => {
	const [encendido, setEncendido] = useState("");

	return (
		<div>
			<div className="containerSemaforo">
				<div
					className={`luces rojo ${
						encendido == "encendidoRojo" ? encendido : ""
					}`}
					onClick={() => {
						setEncendido("encendidoRojo");
					}}></div>
				<div
					className={`luces amarillo ${
						encendido == "encendidoAmarillo" ? encendido : ""
					}`}
					onClick={() => {
						setEncendido("encendidoAmarillo");
					}}></div>
				<div
					className={`luces verde ${
						encendido == "encendidoVerde" ? encendido : ""
					}`}
					onClick={() => {
						setEncendido("encendidoVerde");
					}}></div>
			</div>
			<div className="palo"></div>
		</div>
	);
};

export default Semaforo;
