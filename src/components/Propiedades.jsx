import React from "react";

//! palabra "props" tampoco funciona, tienes que desesctructurar
const Propiedades = ({
	mensajePorDefecto = "hi",
	mensajeDesdeApp,
	numero,
	booleano
}) => {
	//console.log(mensajePorDefecto);

	return (
		<div>
			<h2>Propiedades</h2>
			<p>prop por defecto: {mensajePorDefecto}</p>
			<p>
				{" "}
				<b>props que llegan desde app</b>
			</p>
			<ul>
				<li>texto: {mensajeDesdeApp}</li>
				<li>número: {numero}</li>
				<li>booleano: {booleano ? "verdadero" : "falso"}</li>
			</ul>
		</div>
	);
};

//! defaultProps ha dejado de funcionar en react 18
/* Propiedades.defaultProps = {
	mensajePorDefecto: "mensaje random"
};
 */
export default Propiedades;
