import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList.component";
export default () => {
  const initial_state = [
    {
      id: "1",
      task: "time to bed",
      completed: false
    },
    {
      id: "2",
      task: "time to have the dinner",
      completed: false
    },
    {
      id: "3",
      task: "time to have the lunch",
      completed: false
    }
  ];
  const [todos, setTodos] = useState(initial_state);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODO WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
};
