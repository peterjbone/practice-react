import React, { useState, useEffect } from "react";

export const useFecth = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, seteError] = useState(null);

	useEffect(() => {
		const getData = async (url) => {
			try {
				let res = await fetch(url);

				if (!res.ok) {
					throw {
						err: true,
						status: res.status,
						statusText: res.statusText || "Ocurrió un error"
					};
				}
			} catch (error) {}

			let json = await res.json();

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

		getData(url);
	}, [url]);

	return { data, isPending, error };
};
