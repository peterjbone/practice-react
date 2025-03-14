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

	/* useEffect(() => {
		let url = "https://pokeapi.co/api/v2/pokemon/";
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				json.results.forEach((item) => {
					fetch(item.url)
						.then((res) => res.json())
						.then((json) => {
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default
							};

							setPokemons(() => [...pokemons, pokemon]);
						});
				});
			});
	}, []); */

	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url);
			let json = res.json();
			console.log(json);

			json.results.forEach((item) => {
				fetch(item.url)
					.then((res) => res.json())
					.then((json) => {
						let pokemon = {
							id: json.id,
							name: json.name,
							avatar: json.sprites.front_default
						};

						setPokemons(() => [...pokemons, pokemon]);
					});
			});
		};

		getPokemons();

		let url = "https://pokeapi.co/api/v2/pokemon/";
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				json.results.forEach((item) => {
					fetch(item.url)
						.then((res) => res.json())
						.then((json) => {
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.sprites.front_default
							};

							setPokemons(() => [...pokemons, pokemon]);
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
