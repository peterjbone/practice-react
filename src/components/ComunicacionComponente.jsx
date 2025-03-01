import React, { Component } from "react";

export default class Padre extends Component {
	render() {
		return (
			<div>
				<h2>Comuniacion entre componentes</h2>
				<Hijo mensaje="mensaje para hijo 1" />
				<Hijo mensaje="mensaje para hijo 2" />
			</div>
		);
	}
}

function Hijo({ mensaje }) {
	return <h3>{mensaje}</h3>;
}
