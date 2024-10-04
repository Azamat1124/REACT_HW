import { TodoForm } from "./components/todos/TodoForm";
import { Todos } from "./components/todos/Todos";
import { Button } from "./components/Ui/Button";

function App() {
  return (
    <div>
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
