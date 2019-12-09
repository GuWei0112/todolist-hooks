export default (state, action) => {
  const createId = () => {
    return state.sort((a, b) => a.id - b.id).unshift() + 1;
  };

  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: createId(), task: action.task, completed: false }
      ];
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.task } : todo
      );
    default:
      return state;
  }
};
