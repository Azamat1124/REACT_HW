import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Todo.css";

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");
  

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    if (userInput.trim() !== "") {
      addTask(userInput);
      setUserInput("");
    }
  };
  const notify = () => toast("Карточка добавлено✌️");

  const resFun = () => {
    if (userInput.length === 0) {
      return alert("заполните поле!!!");
    } else {
      notify();
    }
  };

  return (
    <form className="Todo-Form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="my todo list"
        onChange={handleChange}
        value={userInput}
        className="Todo-Input"
      />
      <button className="Todo-Button" onClick={resFun} type="submit">
        <img src="https://cdn-icons-png.freepik.com/512/6459/6459958.png" alt="" />
      </button>
      <ToastContainer />
    </form>
  );
};

export default TodoForm;
