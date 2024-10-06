import React, { useContext } from "react";
import { todoContext } from "../context/TodoContext";
import { TodoList } from "./TodoList";

export const Todos = () => {
  const { todos } = useContext(todoContext);
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
