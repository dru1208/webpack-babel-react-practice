import { ADD_TODO } from "../constants/actionTypes.js"

const defaultState = {
  toDo: {
  	toDoList: []
  }
};

const reducer = (state = defaultState, action) => (
	if (action.TYPE === ADD_TODO) {
		const newToDo = [action.payload]
    return Object.assign({}, state, {
      articles: state.toDo.toDoList.concat(newToDo)
    });
	}
  return state;
);

export default { defaultState, reducer };