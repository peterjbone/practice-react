import React, { Component } from "react";

function Pokemon(props) {
	return (
		<figure>
			<img src={props.avatar} alt={props.name} />
		</figure>
	);
}

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
