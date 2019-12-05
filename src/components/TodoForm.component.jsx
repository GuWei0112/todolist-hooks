import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState.component";
export default ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={e => handleSubmit(e)}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};
