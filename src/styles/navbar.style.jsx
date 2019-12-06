import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import sizes from "./sizes";

export const Root = styled(Paper)`
  width: 100%;
  margin-bottom: 0;
  padding: 0;
  margin: 0;
  height: 100vh;
  && {
    background-color: ${props => (props.switchmode ? "grey" : "white")};
  }
`;

export const Title = styled(Typography)`
  display: block;
  ${sizes.down("sm")} {
    display: none;
  }
`;
