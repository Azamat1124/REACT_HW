import React, { useContext, useState } from "react";
import { Button } from "../Ui/Button";
import { todoContext } from "../context/TodoContext";

export const TodoForm = () => {
  const [inputvalue, setInputValue] = useState("");
  const {addTodo} = useContext(todoContext)
  const handleinputchange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: inputvalue,
    };
    addTodo(newTodo)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputvalue} onChange={handleinputchange} />
      <Button type="submit" variant="warning">
        add
      </Button>
    </form>
  );
};
