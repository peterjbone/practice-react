import React from "react";

const Propiedades = ({ mensajePorDefecto = "hi", bruh }) => {
	console.log(mensajePorDefecto);

	return (
		<div>
			<h2>Propiedades</h2>
			<p>{mensajePorDefecto}</p>
			<p>{bruh}</p>
		</div>
	);
};

//! defaultProps ha dejado de funcionar en react 18
/* Propiedades.defaultProps = {
	mensajePorDefecto: "Hi"
};
 */
export default Propiedades;
