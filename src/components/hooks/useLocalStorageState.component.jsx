import { useState, useEffect } from "react";

export default (key, defaultValue) => {
  const [localStorage, setLocalStorage] = useState(() => {
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
  }, [key, localStorage]);

  return [localStorage, setLocalStorage];
};
