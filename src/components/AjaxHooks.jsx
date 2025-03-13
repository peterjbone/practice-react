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
