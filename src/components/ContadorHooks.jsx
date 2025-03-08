import React, { Component, useState } from "react";

/* const ContadorHooks = () => {
	return <div>ContadorHooks</div>;
};

export default ContadorHooks;
 */

export default function ContadorHooks() {
	const [contador, setContador] = useState(0);

	return (
		<div>
			<h2>Hooks - useState</h2>
		</div>
	);
}
