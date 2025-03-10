import React from "react";

//import React from 'react'

useEffect(() => {
	console.log("fase de montaje");
}, []);

const ScrollHooks = () => {
	const [scrollY, setScrollY] = useState(0);

	//*****************************COMPONENTE
	return (
		<div>
			<h2>Hooks con useEffect</h2>
			<p>Scroll Y del navegador: {scrollY}px</p>
		</div>
	);
};

export default ScrollHooks;
