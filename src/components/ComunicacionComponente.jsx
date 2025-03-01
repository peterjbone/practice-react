import React, { Component } from "react";

export default class Padre extends Component {
	state = {
		contador: 0
	};

	incrementar = (e) => {
		this.setState({
			contador: this.state.contador + 1
		});
	};

	render() {
		return (
			<div>
				<h2>Comuniacion entre componentes</h2>
				<Hijo mensaje="mensaje para hijo 1" />
				<Hijo mensaje="mensaje para hijo 2" incrementar={this.incrementar} />
			</div>
		);
	}
}

function Hijo({ mensaje, incrementar }) {
	return (
		<>
			<h3>{mensaje}</h3>;<button onClick={incrementar}>Sumar</button>
		</>
	);
}
