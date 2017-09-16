const addTodo = (state = [], action) => {
	return [...state,
		{
			text: action.text
		}
	]
}

export default addTodo