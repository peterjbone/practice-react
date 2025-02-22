import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	let subtitulo = "practicing react";
	let auth = true;
	let cuatro = 4;
	let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

	//*********************** APP COMPONENT
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<hr />
			<h2>{subtitulo}</h2>
			<p>Cuatro más cuatro es igual a: {4 + cuatro}</p>
			<p>{auth ? "usuario logeado" : "usuario NO logeado"}</p>
			<p>
				<b>Estciones del año</b>
			</p>
			<ul>
				{estaciones.map((item) => (
					<li>{item}</li>
				))}
			</ul>
			<div>
				<label htmlFor="nombre">Nombre:</label>
				<input type="text" id="nombre" />
			</div>
			<hr />
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		</>
	);
}

export default App;
