import React, { Fragment } from "react";

const ToDoInput = () => (
	<Fragment>
		<form>
			<div className="newToDo">
				<label htmlFor="newToDo">New To Do:</label>
				<input type="text" name="newToDo" id="newToDoTextBox" />
			</div>
			<div className="submitButton">
				<input type="submit" id="submitToDo" />
			</div>
		</form>
	</Fragment>
)

export default ToDoInput;