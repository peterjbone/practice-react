import React, { Component } from "react";

/* function Reloj({ hora }) {
	return <h3>{hora}</h3>;
} */

class Reloj extends Component {
	constructor(props) {
		super(props);
	}

	componentWillUnmount() {
		console.log(3, "el componente se elimino del DOM");
	}

	render() {
		return <h3>{this.props.hora}</h3>;
	}
}

export default class Padre extends Component {
	constructor(props) {
		super(props);
		console.log(0, "el componente se inicializa, aun NO esta en el DOM");

		this.state = {
			hora: new Date().toLocaleTimeString(),
			visible: false
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

	tictac = () => {
		this.temporizador = setInterval(() => {
			this.setState({
				hora: new Date().toLocaleTimeString()
			});
		}, 1000);
	};

	iniciar = () => {
		this.tictac();
		this.setState({ visible: true });
	};

	detener = () => {
		clearInterval(this.temporizador);
		this.setState({ visible: false });
	};

	render() {
		console.log(4, "el componente se dibuja en el DOM");

		return (
			<div>
				<h2>Ciclo de vida de los componentes</h2>
				{/* 			<h3>{this.state.hora}</h3> */}
				{this.state.visible ? <Reloj hora={this.state.hora} /> : null}
				<button onClick={this.iniciar}>iniciar</button>
				<button onClick={this.detener}>detener</button>
			</div>
		);
	}
}
