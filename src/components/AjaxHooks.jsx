import React from "react";

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	);
}

const AjaxHooks = () => {
	const [pokemons, setPokemons] = useState([]);
	console.log(pokemons);

	useEffect(() => {
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
	}, []);

	//************************** COMPONENTE
	return (
		<div>
			<h2>peticiones asincronas con hooks</h2>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				pokemons.map((item) => (
					<Pokemon key={uuidv4()} name={item.name} avatar={item.avatar} />
				))
			)}
		</div>
	);
};

export default AjaxHooks;
