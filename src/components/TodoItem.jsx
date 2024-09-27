import React from "react";

const TodoItem = ({ todo, toggleTask, removeTask }) => {
  return (
    <ul className="Todo-Item">
      <li
        className={`Todo-Task ${todo.completed ? "completed" : ""}`}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </li>
      <button
        onClick={() => removeTask(todo.id)}
        className="Todo-Delete-Button"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709786.png"
          alt=""
        />
      </button>
    </ul>
  );
};

export default TodoItem;
