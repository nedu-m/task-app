import * as React from "react";
import { TodosContext } from "../store/todo-store";
import "./todo-results.scss";

export const TodoResults = () => {
  // get the todos from the context
  const { todos } = React.useContext(TodosContext);

  // get the total number of todos
  const checkedTodos = todos.filter((todo) => todo.checked);
  return (
    <div className="todo-results">
      {/* display the total number of todos */}
      {checkedTodos.length}/{todos.length} completed
    </div>
  );
};
