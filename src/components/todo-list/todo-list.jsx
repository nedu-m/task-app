import * as React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { TodosContext } from "../store/todo-store";
import "./todo-list.scss";

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  // toggle the checked state of a todo
  const toggleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      // if the todo id matches the id passed in, toggle the checked state
      if (todo.id === id) {
        // return a new object with the same properties as the todo, but with the checked state toggled
        return {
          ...todo,

          checked: !todo.checked,
        };
      }
      return todo;
    });
    // update the todos in state
    setTodos(newTodos);
  };

  // delete a todo
  const deleteTodo = (id) => {
    // filter out the todo with the id passed in
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };
  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <div key={todoItem.id} className="todo-list-item">
              <Checkbox
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => deleteTodo(todoItem.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
