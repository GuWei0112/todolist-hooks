import useLocalStorage from "./useLocalStorageState.component";
export default () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const createId = () => {
    return todos.sort((a, b) => a.id - b.id).unshift() + 1;
  };

  return {
    todos,
    addTodo: newTodo => {
      setTodos([...todos, { id: createId(), task: newTodo, completed: false }]);
    },
    removeTodo: todoId => {
      setTodos(todos.filter(todo => todo.id !== todoId));
    },
    toggleTodo: todoId => {
      setTodos(
        todos.map(todo =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: ({ task, id }) => {
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, task } : todo)));
    }
  };
};
