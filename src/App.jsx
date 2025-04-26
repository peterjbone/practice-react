import react, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Componente from "./components/Componente.jsx";
import Propiedades from "./components/Propiedades.jsx";
import Estado from "./components/Estado.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
import { EventosES6, EventosES7, ExtraEventos } from "./components/Eventos.jsx";
import ComunicacionComponente from "./components/ComunicacionComponente.jsx";
import CicloVida from "./components/CicloVida.jsx";
import Ajax from "./components/Ajax.jsx";
import ContadorHooks from "./components/ContadorHooks.jsx";
import ScrollHooks from "./components/ScrollHooks.jsx";
import RelojHook from "./components/RelojHook.jsx";
import AjaxHooks from "./components/AjaxHooks.jsx";
import CustomHooks from "./components/CustomHooks.jsx";
import Referencias from "./components/Referencias.jsx";

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

			<div>
				<section id="sintaxis jsx">
					<h2>Sintaxis JSX</h2>
					<h2>{subtitulo}</h2>
					<p>Cuatro más cuatro es igual a: {4 + cuatro}</p>
					<p>{auth ? "usuario logeado" : "usuario NO logeado"}</p>
					<p>
						<b>Estaciones del año</b>
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
				</section>
				<hr />
				<Componente mensaje="hola soy el componente funcional" />
				<hr />
				<Propiedades
					mensajeDesdeApp="hi this is a message from app.jsx"
					numero={4}
					booleano={true}
					array={[1, 2, 3]}
					objeto={{ nombre: "joao", edad: 23 }}
					elemento={<b>texto con negrita</b>}
					funcion={(num) => num * num}
					componente={<Componente mensaje="soy un componente dentro de otro" />}
				/>
				<hr />
				<Estado />
				<hr />
				<RenderizadoCondicional />
				<hr />
				<RenderizadoElementos />
				<hr />
				<EventosES6 />
				<hr />
				<EventosES7 />
				<hr />
				<ExtraEventos />
				<hr />
				<ComunicacionComponente />
				<hr />
				{/* <CicloVida /> */}
				<hr />
				<Ajax />
				<hr />
				<ContadorHooks mensaje="contador de clicks desde app.jsx" />
				<hr />
				<ScrollHooks />
				<hr />
				<RelojHook />
				<hr />
				<AjaxHooks />
				<hr />
				<CustomHooks />
				<hr />
				<Referencias />
			</div>
		</>
	);
}

export default App;
