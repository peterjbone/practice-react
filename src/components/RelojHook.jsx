import React from "react";

function Reloj({ hora }) {
	return <h3>{hora}</h3>;
}

function RelojHook() {
	const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let temporizador;
  

  function tictac() {
    temporizador = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000);
  }

	//* COMPONENTE
	return (
		<div>
			<h2>Reloj con Hooks</h2>
			<button onClick={}>iniciar</button>
			<button onClick={}>detener</button>
		</div>
	);
}

export default RelojHook;
