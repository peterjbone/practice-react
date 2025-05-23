import React from "react";

/* const RenderizadoCondicional = () => {
	return <div>RenderizadoCondicional</div>;
};

export default RenderizadoCondicional;
 */

function Login() {
	return (
		<div>
			<h3>Login</h3>
		</div>
	);
}

function Logout() {
	return (
		<div>
			<h3>Logout</h3>
		</div>
	);
}

class RenderizadoCondicional extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			session: true
		};
	}

	render() {
		return (
			<div>
				<h2>Renderizao condicional</h2>
				{this.state.session ? <Login /> : <Logout />}
			</div>
		);
	}
}

export default RenderizadoCondicional;
