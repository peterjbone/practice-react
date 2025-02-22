import react, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Componente from "./components/Componente.jsx";

function App() {
	let subtitulo = "practicing react";
	let auth = true;
	let cuatro = 4;
	let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

	//*********************** APP COMPONENT
	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<h1>React</h1>

			<hr />
			<h2>{subtitulo}</h2>
			<p>Cuatro más cuatro es igual a: {4 + cuatro}</p>
			<p>{auth ? "usuario logeado" : "usuario NO logeado"}</p>
			<p>
				<b>Estciones del año</b>
			</p>
			<ul>
				{estaciones.map((item) => (
					<li key={uuidv4()}>{item}</li>
				))}
			</ul>
			<div>
				<label htmlFor="nombre">Nombre:</label>
				<input type="text" id="nombre" />
			</div>
			<hr />

			<section>
				<Componente />
			</section>
		</>
	);
}

export default App;
