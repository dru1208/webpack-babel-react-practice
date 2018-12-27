import React, { Fragment } from "react";
import ToDoInput from "./ToDoInput.jsx"

const ToDo = (props) => (
	<Fragment>
		<div class="title">ToDo: A List for Me</div>
		<ToDoInput />
	</Fragment>
)

export default ToDo;