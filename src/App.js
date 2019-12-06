import React from "react";
import TodoApp from "./components/TodoApp.component";
import "./App.css";
import { ThemeProvider } from "./context/theme.context";
import { TodosProvider } from "./context/todo.context";
export default () => {
  return (
    <ThemeProvider>
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </ThemeProvider>
  );
};
