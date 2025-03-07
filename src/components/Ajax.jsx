import React, { Component } from "react";

export default class Ajax extends Component {
	state = {
		pokemons: []
	};
	render() {
		return (
			<div>
				<h2>peticiones asincronas en componentes de clase</h2>
			</div>
		);
	}
}
