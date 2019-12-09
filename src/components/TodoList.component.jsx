import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "../context/todo.context";
import Todo from "./Todo.component";
export default () => {
  const todos = React.useContext(TodosContext)
  if (todos.length > 0) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo todo={todo} key={todo.id} />
              {i < todo.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
};
