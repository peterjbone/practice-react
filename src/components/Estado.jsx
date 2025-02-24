import React from "react";

/* const Estado = () => {
	return (
		<div>
			<h2>Estado</h2>
		</div>
	);
};

export default Estado; */

//? estado en componente de clase
class Estado extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
		setInterval(() => {
			this.setState({
				contador: this.state.contador + 1
			});
		}, 1000);
	}

	render() {
		return (
			<div>
				<h2>Estado</h2>
				<p>{this.state.contador}</p>
			</div>
		);
	}
}

export default Estado;
