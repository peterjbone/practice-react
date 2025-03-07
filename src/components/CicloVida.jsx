import React, { Component } from "react";

function Reloj({ hora }) {
	return <h3>{hora}</h3>;
}

export default class Padre extends Component {
	constructor(props) {
		super(props);
		console.log(0, "el componente se inicializa, aun NO esta en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString()
		};

		this.temporizador = null;
	}

	componentDidMount() {
		console.log(1, "el componente ya se encuentra en el DOM`");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(2, "el estado o las props han cambiado");
		console.log(prevProps);
		console.log(prevState);
	}

	componentWillUnmount() {
		console.log(3, "el componente se elimino del DOM");
	}

	tictac = () => {
		this.temporizador = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString()
			});
		}, 1000);
	};

	iniciar = () => {
		this.tictac();
	};

	detener = () => {
		clearInterval(this.temporizador);
	};

	render() {
		console.log(4, "el componente se dibuja en el DOM");

		return (
			<div>
				<h2>Ciclo de vida de los componentes</h2>
				{/* 			<h3>{this.state.hora}</h3> */}
				<Reloj hora={this.state.hora} />
				<button onClick={this.iniciar}>iniciar</button>
				<button onClick={this.detener}>detener</button>
			</div>
		);
	}
}
