import React, { useState } from "react";
import "./TodoList.css";
export const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [handtodo, setHandtodo] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todo,
      id: Date.now().toString(),
      completed: false,
    };

    setHandtodo([...handtodo, newTodo]);
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const deleteHander = (id) => {
    setHandtodo(handtodo.filter((item) => item.id !== id));
  };
  const toggleComplete = (id) => {
    setHandtodo(
      handtodo.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="todo-list">
      <form className="container-todo" onSubmit={handleSubmit}>
        <h1 className="title">ToDo-List</h1>
        <hr />
        <div className="input-add">
           
              <input type="text" onChange={handleChange} value={todo}    placeholder="Enter new todo..."/>
          <button type="submit">ADD</button>
        </div>
        {handtodo.map((e) => (
          <div className="list-containe" key={e.id}>
            <span style={{textDecoration: e.completed ? "line-through" : "none", }}>{" "}{e.title}</span>

         <div className="button-checkbox">
         <input
              type="checkbox"
              checked={e.completed}
              onChange={() => toggleComplete(e.id)}
            />
            <button onClick={() => deleteHander(e.id)}>DELETE</button>
         </div>
          </div>
        ))}
      </form>
    </div>
  );
};
