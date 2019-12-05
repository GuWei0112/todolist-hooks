import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState.component";

export default ({ todo, editTodo, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(todo.task);

  const handleSubmit = e => {
    e.preventDefault();
    todo.task = value;
    editTodo(todo);
    reset();
    toggleEditForm();
  };

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      style={{ marginLeft: "1rem", width: "100%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        autoFocus
      />
    </form>
  );
};
