import React, { createContext } from "react";
//import useTodostate from "../components/hooks/useTodoState.component";
import todoReducer from "../components/reducers/todo.reducer";
import useLocalStorageReducer from "../components/reducers/localstorage.reducer";
export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = props => {
  //const todoStuff = useTodostate([]);
  const [todos, dispatch] = useLocalStorageReducer("todos", [], todoReducer);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
};
