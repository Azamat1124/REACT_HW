import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodoProvaider } from "./components/context/TodoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvaider>
      <App />
    </TodoProvaider>
  </StrictMode>
);
