import React from "react";

//? estado en componente funcionales

function EstadoAHijo(props) {
	return (
		<div>
			<h3>hijo: {props.contadorHijo}</h3>
		</div>
	);
}

//? estado en componente de clase
class Estado extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
		setInterval(() => {
			this.setState({
				contador: this.state.contador + 1
			});
		}, 1000);
	}

	render() {
		return (
			<div>
				<h2>Estado</h2>
				<p>padre: {this.state.contador}</p>
				<EstadoAHijo contadorHijo={this.state.contador} />
			</div>
		);
	}
}

export default Estado;
