import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState.component";
import { DispatchContext } from "../context/todo.context";

export default ({ todo, toggleEditForm }) => {
  const dispatch = React.useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(todo.task);

  const handleSubmit = e => {
    e.preventDefault();
    todo.task = value;
    dispatch({ type: "EDIT", id: todo.id, task: todo.task });
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
