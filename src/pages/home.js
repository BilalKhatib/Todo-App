import { useContext, useEffect } from "react";
import { todoContext } from "../context/todoContext";
import Clock from "../components/clock";
import Check from "../components/check";

function Home() {
  let { todos, setTodos } = useContext(todoContext);

  useEffect(() => {
    console.log("Todos List Updated: ", todos);
  }, [todos]);

  function toggleComplete(item) {
    const updatedTodoList = todos.map((todo) =>
      todo.id === item.id ? { ...todo, isCompleted: !item.isCompleted } : todo
    );
    setTodos(updatedTodoList);
  }

  return (
    <div className="container">
      <div className="containerHeader">
        <h1>Home Page</h1>
        <small>
          You can view your tasks on this page. Click on any task to toggle its
          completion status.
        </small>
      </div>
      <h4>Total Tasks: {todos.length}</h4>
      <div className="containerBody">
        {todos.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleComplete(item)}
            className="todoCard"
          >
            <div className="todoCardHeader">
              <h3>Task #{item.id}</h3>
              <div>
                {item.isCompleted ? (
                  <h3
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      color: "#ed5acd",
                    }}
                  >
                    Completed <Check />
                  </h3>
                ) : (
                  <h3
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      color: "#f0a728",
                    }}
                  >
                    Pending <Clock />
                  </h3>
                )}
              </div>
            </div>
            <div className="divider" />
            <h2>Task: {item.todo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
