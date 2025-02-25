import React from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../helpers/data.json";

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
				<ol>
					{this.state.seasons.map((item) => (
						<li key={uuidv4()}>{item}</li>
					))}
				</ol>
			</div>
		);
	}
}

export default RenderizadoElementos;
