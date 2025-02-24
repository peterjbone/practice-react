import React from "react";

/* const RenderizadoCondicional = () => {
	return <div>RenderizadoCondicional</div>;
};

export default RenderizadoCondicional;
 */

class RenderizadoCondicional extends React.Component {
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

export default RenderizadoCondicional;
