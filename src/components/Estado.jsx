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
	}

	render() {
		return (
			<div>
				<h2>Estado</h2>
			</div>
		);
	}
}

export default Estado;
