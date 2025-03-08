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

	componentDidMount() {
		let url = "https://pokeapi.co/api/v2/pokemon/";
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				json.results.forEach((item) => {
					fetch(item.url)
						.then((res) => res.json())
						.then((json) => {
							//console.log(item.name);
							console.log(json);
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default
							};
						});
				});
			});
	}

	render() {
		return (
			<div>
				<h2>peticiones asincronas en componentes de clase</h2>
			</div>
		);
	}
}
