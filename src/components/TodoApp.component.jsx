import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList.component";
import TodoForm from "./TodoForm.component";
import { Root, Title } from "../styles/navbar.style";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../context/theme.context";

export default () => {
  const { switchmode, switchChange } = useContext(ThemeContext);

  return (
    <Root elevation={0} switchmode={switchmode}>
      <AppBar
        color={switchmode ? "default" : "primary"}
        position="static"
        style={{ height: "64px" }}
      >
        <Toolbar>
          <Title color="inherit" variant="h6">
            TODO WITH HOOKS
          </Title>
          <Switch onClick={() => switchChange()} />
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm />
          <TodoList />
        </Grid>
      </Grid>
    </Root>
  );
};
