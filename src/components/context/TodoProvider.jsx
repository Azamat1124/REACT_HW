import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
