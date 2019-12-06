import React, { createContext } from "react";
import useToggleState from "../components/hooks/useToggleState.component";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, toggle] = useToggleState(false);
  return (
    <ThemeContext.Provider
      value={{ switchmode: state, switchChange: () => toggle() }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
