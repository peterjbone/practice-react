import React from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../helpers/data.json";

function ElementoDeLista({ web, name }) {
	return (
		<li>
			<a href={web}>{name}</a>
		</li>
	);
}

class RenderizadoElementos extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seasons: ["primavera", "verano", "otoño", "invierno"]
		};
	}

	render() {
		console.log(data);

		return (
			<div>
				<h2>Renderizado de elementos</h2>
				<b>estaciones del año</b>
				<ol>
					{this.state.seasons.map((item) => (
						<li key={uuidv4()}>{item}</li>
					))}
				</ol>
				<h3>Frameworks js</h3>
				<ul>
					{data.map((item) => (
						<ElementoDeLista web={item.web} name={item.name} />
					))}
				</ul>
			</div>
		);
	}
}

export default RenderizadoElementos;
