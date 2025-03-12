import React from "react";

function Reloj({ hora }) {
	return <h3>{hora}</h3>;
}

function RelojHook() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);
	let temporizador;

	function tictac(valor) {
		temporizador = setInterval(() => {
			setHora(new Date().toLocaleTimeString());
		}, 1000);
	}

	function iniciar() {
		tictac();
		setVisible(true);
	}

	function detener() {
		clearInterval(temporizador);
		setVisible(false);
	}

	//* COMPONENTE
	return (
		<div>
			<h2>Reloj con Hooks</h2>
			<p>
				<b>{visible && <Reloj hora={hora} />}</b>
			</p>
			<button onClick={() => tictac()}>iniciar</button>
			<button onClick={() => tictac()}>detener</button>
		</div>
	);
}

export default RelojHook;
