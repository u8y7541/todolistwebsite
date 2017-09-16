const removeTodo = (state = [], action) => {
	let newState = JSON.parse(JSON.stringify(state))
	newState.splice(action.index, 1)
	return newState
}

export default removeTodo