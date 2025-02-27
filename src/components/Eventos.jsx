import React, { Component } from "react";

class Eventos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};

		this.sumar = this.sumar.bind(this);
		this.restar = this.restar.bind(this);
	}

	sumar() {}

	restar() {}

	render() {
		return (
			<div>
				<h2>Eventos con componentes de clase</h2>
				<nav>
					<button onClick={this.sumar}>+</button>
					<button onClick={this.restar}>-</button>
				</nav>
				<h3>{this.state.contador}</h3>
			</div>
		);
	}
}

export default Eventos;
