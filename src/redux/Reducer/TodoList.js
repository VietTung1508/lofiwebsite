const initState = {
  todos: [],
};

const toDoReducer = (state = initState, action) => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "deleteTodo": {
      return {
        ...state,
        todos: [...state.todos.filter((todo, id) => id !== action.payload)],
      };
    }
    case "setCompleted": {
      const toggle = false;
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.isCompleted = !toggle;
        }
      });

      return {
        ...state,
        todos: [...state.todos],
      };
    }
    default:
      return state;
  }
};

export default toDoReducer;
