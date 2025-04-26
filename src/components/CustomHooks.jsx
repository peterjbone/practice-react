import React from "react";
import { useFecth } from "../hooks/useFetch";

const CustomHooks = () => {
	let url = "https://pokeapi.co/api/v2/pokemon/";
	url = "https://jsonplaceholder.typicode.com/users";

	//console.log(useFecth);

	let { data, isPending, error } = useFecth(url);

	//* componente
	return (
		<>
			<h2>Hooks personalizados</h2>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<h3>
				<pre style={{ whiteSpace: "pre-wrap" }}>
					<code>{JSON.stringify(data)}</code>
				</pre>
			</h3>
		</>
	);
};

export default CustomHooks;
