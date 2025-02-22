import React from "react";

const Propiedades = (props) => {
	console.log(props.mensajePorDefecto);

	return (
		<div>
			<h2>Propiedades</h2>
			<p>{props.mensajePorDefecto}</p>
			<p>{props.bruh}</p>
		</div>
	);
};

//! default props ha dejado de funcionar en react 18
/* Propiedades.defaultProps = {
	mensajePorDefecto: "Hi"
};
 */
export default Propiedades;
