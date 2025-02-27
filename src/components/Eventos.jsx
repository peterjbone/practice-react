import React, { Component } from "react";

class Eventos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 0
		};
  }
  


	render() {
		return (
			<div>
				<h2>Eventos con componentes de clase</h2>
        <nav>
          <button onClick={}>+</button>
          <button onClick={}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
			</div>
		);
	}
}

export default Eventos;
