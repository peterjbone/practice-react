import React, { Component } from "react";

export class EventosES6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

	sumar() {
		this.setState({
			contador: this.state.contador + 1
		});
	}

	restar() {
		this.setState({
			contador: this.state.contador - 1
		});
	}

	render() {
		return (
			<div>
				<h2>Eventos con componentes de clase ES6</h2>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

export class EventosES7 extends Component {
	state = {
		contador: 0
	};

	sumar = (e) => {
		this.setState({
			contador: this.state.contador + 1
		});
	};

	restar = (e) => {
		this.setState({
			contador: this.state.contador - 1
		});
	};

	render() {
		return (
			<div>
				<h2>Eventos con componentes de clase ES7</h2>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

function Boton({ funcion }) {
	return <button onClick={(e) => funcion(e, "hola")}>boton componente</button>;
}

export class ExtraEventos extends Component {
	handleCLick = (e, mensaje) => {
		console.log("evento", e);
		console.log("mensaje", mensaje);
	};

	render() {
		return (
			<div>
				<h2>Otros eventos</h2>
				<button onClick={(e) => this.handleCLick(e, "hola")}>saludar</button>
				<Boton funcion={this.handleCLick} />
			</div>
		);
	}
}
