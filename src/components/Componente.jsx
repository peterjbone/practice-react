import React, { Component } from "react";

/* class Componente extends Component {
	render() {
		return <h2>{this.props.mensaje}</h2>;
	}
} */

const Componente = (props) => {
	return <h2>{props.mensaje}</h2>;
};

export default Componente;
