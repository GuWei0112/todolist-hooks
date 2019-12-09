import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "./hooks/useToggleState.component";
import EditTodoform from "./EditTodoform.component";
import { ThemeContext } from "../context/theme.context";
import { DispatchContext } from "../context/todo.context";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default memo(({ todo }) => {
  const dispatch = useContext(DispatchContext);
  const { switchmode } = useContext(ThemeContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoform todo={todo} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            color={switchmode ? "secondary" : "primary"}
            tabIndex={-1}
            checked={todo.completed}
            onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
          />
          <ListItemText
            style={{ textDecoration: todo.completed ? "Line-through" : "none" }}
          >
            {todo.task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
});
