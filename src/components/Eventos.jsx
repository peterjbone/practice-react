import React, { Component } from "react";

class Eventos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
	}

	render() {
		return (
			<div>
				<h2>Eventos con componentes de clase</h2>
				<p>
					<b></b>
				</p>
			</div>
		);
	}
}

export default Eventos;
