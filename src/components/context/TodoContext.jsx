import { createContext, useState } from "react";

export const todoContext = createContext({});

export const TodoProvaider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: "e1", title: "react" },
    { id: "e2", title: "react" },
  ]);

  const addTodo = (todoObject) => {
    const shallowCopy = [...todos, todoObject]
    setTodos(shallowCopy);
  };
  const deleteTodoHendler = (id)=>{
    const filteredTodos = todos.filter((item)=>item.id !== id)
    setTodos(filteredTodos)
  }
  return (
    <todoContext.Provider value={{ todos, addTodo, deleteTodoHendler}}>{children}</todoContext.Provider>
  );
};
