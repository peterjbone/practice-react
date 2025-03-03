import React, { Component } from "react";

export default class Padre extends Component {
	constructor(props) {
		super(props);
		console.log(0, "el componente se inicializa, aun NO esta en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString()
		};

		this.temporizador = null;
	}

	tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: 
      })
    }, 1000);
	};

	iniciar = () => {};

	detener = () => {};

	render() {
		console.log(4, "el componente se dibuja en el DOM");

		return (
			<div>
				<h2>Ciclo de vida de los componentes</h2>
				<h3>{this.state.hora}</h3>
				<button onClick={iniciar}>iniciar</button>
				<button onClick={detener}>detener</button>
			</div>
		);
	}
}
