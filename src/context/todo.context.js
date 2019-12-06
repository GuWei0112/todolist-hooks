import React, { createContext } from "react";
import useTodostate from "../components/hooks/useTodoState.component";
export const TodosContext = createContext();

export const TodosProvider = props => {
  const todoStuff = useTodostate([]);

  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
};
