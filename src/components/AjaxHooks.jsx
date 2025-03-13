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

	//************************** COMPONENTE
	return (
		<div>
			<h2>peticiones asincronas en componentes de clase</h2>
			{this.state.pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				this.state.pokemons.map((item) => (
					<Pokemon key={uuidv4()} name={item.name} avatar={item.avatar} />
				))
			)}
		</div>
	);
};

export default AjaxHooks;
