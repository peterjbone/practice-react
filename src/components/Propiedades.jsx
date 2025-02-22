import React from "react";

const Propiedades = (props) => {
	console.log(props.mensajePorDefecto);

	return (
		<div>
			<h2>Propiedades</h2>
			<p>{props.mensajePorDefecto}</p>
		</div>
	);
};

Propiedades.defaultProps = {
	mensajePorDefecto: "Hi"
};

export default Propiedades;
