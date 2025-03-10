import React from "react";

//import React from 'react'

useEffect(() => {
	console.log("fase de actualización");

	function detectarScroll() {
		setScrollY(windows.pageYOffset);
	}

	//detectarScroll();

	window.addEventListener("scroll", detectarScroll);
}, []);

useEffect(() => {
	console.log("fase de montanje");
}, []);

useEffect(() => {
	console.log("fase de actualizacion");
	// cuando el useEffect esta sin array (se ejecuta siempre y no es recomendable)
});

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
