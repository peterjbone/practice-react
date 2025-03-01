import React, { Component } from "react";

export default class Padre extends Component {
	constructor(props) {
		super(props);
		console.log(0, "el componente se inicializa, aun NO esta en el DOM");
	}

	render() {
		return (
			<div>
				<h2>Ciclo de vida de los componentes</h2>
			</div>
		);
	}
}
