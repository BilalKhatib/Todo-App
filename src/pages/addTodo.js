import { useContext, useRef, useState } from "react";
import { todoContext } from "../context/todoContext";

const AddTodo = () => {
  const { todos, setTodos } = useContext(todoContext);
  const todoInput = useRef();

  const [error, setError] = useState(false)

  function handleSubmit(event) {
    event.preventDefault();
    const newTodoTask = todoInput.current.value;
    if (newTodoTask) {
      let newTodo = {
        id: todos.length + 1,
        todo: newTodoTask,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      todoInput.current.value = "";
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <label>New Task</label>
          <textarea ref={todoInput} placeholder="Enter A New Todo" />
          {
            error && (
              <p style={{color: "red", marginTop: "10px"}}>Can't add empty task! Please try again</p>
            )
          }
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
