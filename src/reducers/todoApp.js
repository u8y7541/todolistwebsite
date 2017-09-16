import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO } from '../actions';
import addTodo from './addTodo';
import removeTodo from './removeTodo';

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return addTodo(state, action)
		case REMOVE_TODO:
			return removeTodo(state, action)
		default:
			return state
	}
}

const todoApp = combineReducers({todos})
export default todoApp