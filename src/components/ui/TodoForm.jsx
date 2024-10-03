import React, { useContext, useState } from "react";
import { ButtonTodo } from "./ButtonTodo";
import { TodoContext } from "../context/TodoProvider";

export const TodoForm = () => {
const [inputvalue, setInputValue] = useState("")
const {addTodos} = useContext (TodoContext)
  return (
    <form>
      <input type="text" onChange={onChange} />
      <ButtonTodo />
    </form>
  );
};








