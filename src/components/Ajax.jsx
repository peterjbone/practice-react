import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

function Pokemon(props) {
	return (
		<figure>
			<img src={props.avatar} alt={props.name} />
			<figcaption>{props.name}</figcaption>
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

							let pokemons = [...this.state.pokemons, pokemon];

							this.setState({ pokemons });
						});
				});
			});
	}

	render() {
		return (
			<div>
				<h2>peticiones asincronas en componentes de clase</h2>
				{this.state.pokemons.map((item) => (
					<Pokemon key={uuidv4()} name={item.name} avatar={item.avatar} />
				))}
			</div>
		);
	}
}
