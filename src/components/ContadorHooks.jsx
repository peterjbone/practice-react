import React, { Component, useState } from "react";

/* const ContadorHooks = () => {
	return <div>ContadorHooks</div>;
};

export default ContadorHooks;
 */

export default function ContadorHooks() {
	const [contador, setContador] = useState(0);

	const sumar = () => setContador(contador + 1);
	const restar = () => setContador(contador - 1);

	//************ COMPONENTE
	return (
		<div>
			<h2>Hooks - useState</h2>
			<nav>
				<button onClick={sumar}>Sumar</button>
				<button onClick={restar}>restar</button>
			</nav>
		</div>
	);
}
