import React from "react";

//import React from 'react'

useEffect(() => {
	console.log("fase de montaje");

	return () => {
		second;
	};
}, [third]);

const ScrollHooks = () => {
	return (
		<div>
			<h2>Hooks con useEffect</h2>
		</div>
	);
};

export default ScrollHooks;
