import * as React from "react";
import { TodosContext } from "../store/todo-store";
import "./todo-form.scss";

export const TodoForm = () => {
  // get the todos and setTodos from the context
  const { todos, setTodos } = React.useContext(TodosContext);

  //create a state for the task value
  const [task, setTask] = React.useState("");

  // add a new todo
  const handleAdd = () => {
    if (task) {
      // create a new todo object
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          label: task,
          checked: false,
        },
      ]);
      // clear the input
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    // if the user presses enter, add the todo
    if (e.keyCode === 13) {
      handleAdd();
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
