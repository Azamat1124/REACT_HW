import React from "react";
import Movies from "./components/movies/Movies";
import { TodoList } from "./components/todolist/TodoList";
import { Header } from "./components/movies/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <Movies />
      {/* <TodoList /> */}
    </div>
  );
};

export default App;
