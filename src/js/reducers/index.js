import { combineReducers } from "redux"

import { reducer as todo } from "./todo.js"

const rootReducer = combineReducers({
	todo
})

export default rootReducer;