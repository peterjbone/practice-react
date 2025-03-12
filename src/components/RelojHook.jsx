import React from "react";

function Reloj({ hora }) {
	return <h3>hora local: {hora}</h3>;
}

function RelojHook() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);
	//let temporizador;

	/* 	function tictac(valor) {
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
 */

	useEffect(() => {
		let temporizador;

		if (visible) {
			temporizador = setInterval(() => {
				setHora(new Date().toLocaleTimeString());
			}, 1000);
		} else {
			clearInterval(temporizador);
		}

		return () => {
			console.log("fase de desmontaje");
			clearInterval(temporizador);
		};
	}, [visible]);

	//* COMPONENTE
	return (
		<div>
			<h2>Reloj con Hooks</h2>
			<p>
				<b>{visible && <Reloj hora={hora} />}</b>
			</p>
			<button onClick={() => setVisible(true)}>iniciar</button>
			<button onClick={() => setVisible(false)}>detener</button>
		</div>
	);
}

export default RelojHook;
