import React from "react";

function RelojHook() {
	const [hour, setHour] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);

	//* COMPONENTE
	return (
		<div>
			<h2>Reloj Hook</h2>
		</div>
	);
}

export default RelojHook;
