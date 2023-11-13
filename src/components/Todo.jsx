import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
