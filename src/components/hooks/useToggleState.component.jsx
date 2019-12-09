import { useState } from "react";
export default () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
