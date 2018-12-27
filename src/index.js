import ToDo from "./js/components/presentational/todo/ToDo.jsx";
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom"

class App extends Component {
	render() {
		return(
			<Fragment>
				<ToDo />
			</Fragment>
		)
	}
}



const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false