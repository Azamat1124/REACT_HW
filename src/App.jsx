import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { Loading } from "./components/Loading";
function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Date.now(),
        task: userInput,
        completed: false,
      };
      setTodos([...todos, newTask]);
    }
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="ToDo-list-div">
      <h1>Todo list📝</h1>

      <h2>{todos.length}</h2>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TodoForm addTask={addTask} />

          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
