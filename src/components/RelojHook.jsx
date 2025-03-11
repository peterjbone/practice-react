import React from "react";

function Reloj({ hora }) {
	return <h3>{hora}</h3>;
}

function RelojHook() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);

	//* COMPONENTE
	return (
		<div>
			<h2>Reloj con Hooks</h2>
		</div>
	);
}

export default RelojHook;
