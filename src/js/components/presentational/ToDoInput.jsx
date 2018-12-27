import React, { Fragment } from "react";

const ToDoInput = () => (
	<Fragment>
		<form>
			<div class="newToDo">
				<label htmlFor="newToDo">New To Do:</label>
				<input type="text" name="newToDo" id="newToDoTextBox" />
			</div>
				<input type="submit" id="submitToDo" />
		</form>
	</Fragment>
)

export default ToDoInput;