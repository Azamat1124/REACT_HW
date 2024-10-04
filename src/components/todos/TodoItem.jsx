import React, { useContext } from "react";
import { Button } from "../Ui/Button";
import { todoContext, TodoProvaider } from "../context/TodoContext";

export const TodoItem = ({ id, title }) => {
  const { deleteTodoHendler } = useContext(todoContext);
  return (
    <li>
      <h1>{title}</h1>
      <Button variant="danger" onClick={() =>deleteTodoHendler(id) }>
        DELETE
      </Button>
    </li>
  );
};
