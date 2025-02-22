import React from "react";

//! palabra "props" tampoco funciona, tienes que desesctructurar
const Propiedades = ({ mensajePorDefecto = "hi", mensajeDesdeApp }) => {
	//console.log(mensajePorDefecto);

	return (
		<div>
			<h2>Propiedades</h2>
			<p>{mensajePorDefecto}</p>
			<p>{mensajeDesdeApp}</p>
		</div>
	);
};

//! defaultProps ha dejado de funcionar en react 18
/* Propiedades.defaultProps = {
	mensajePorDefecto: "Hi"
};
 */
export default Propiedades;
