import { useReducer, useEffect } from "react";

export default (key, defaultValue, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      val = defaultValue;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localStorage));
  }, [state, key]);

  return [state, dispatch];
};
