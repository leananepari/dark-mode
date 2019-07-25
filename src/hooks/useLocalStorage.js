import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValues, setStoredValues] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  function setValue(value) {
    setStoredValues(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValues, setValue];
}

export default useLocalStorage;