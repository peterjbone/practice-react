import React from "react";

class RenderizadoElementos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seasons: ["primavera", "verano", "otoño", "invierno"]
		};
	}

	render() {
		return (
			<div>
				<h2>Renderizado de elementos</h2>
				<b>estaciones del año</b>
				<ol></ol>
			</div>
		);
	}
}

export default RenderizadoElementos;
