import React, { useState, useEffect } from "react";

export const useFecth = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, seteError] = useState(null);

	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url);
			let json = await res.json();
			//console.log(json);

			json.results.forEach(async (item) => {
				let res = await fetch(item.url);
				let json = await res.json();

				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default
				};

				setPokemons(() => [...pokemons, pokemon]);
			});
		};

		getPokemons();
	}, [url]);

	return { data, isPending, error };
};
