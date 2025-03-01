import React, { Component } from "react";

export default class Padre extends Component {
	render() {
		return (
			<div>
				<h2>Comuniacion entre componentes</h2>
			</div>
		);
	}
}

function Hijo({ mensaje }) {
	return <h2>{mensaje}</h2>;
}
