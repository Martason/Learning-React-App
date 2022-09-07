import React, { useEffect } from "react";

const Todo = (todos, setTodos) => {
  /* const [todos, setTodos] = useState([{ content: "", isCompleted: false }]); */

  useEffect(() => {
    createTodoAtIndex(null, todos.length - 1);
  }, []);

  function handleKeyDown(e, i) {
    if (e.key === "Enter") {
      createTodoAtIndex(e, i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: "",
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos((todos) =>
      todos.slice(0, i).concat(todos.slice(i + 1, todos.length))
    );
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <form className="todo-list component-frame">
      <ul>
        {todos.map((todo, index) => (
          <div
            key={`todo-${index}`}
            className={`todo ${todo.isCompleted && "todo-is-completed"}`}
          >
            <div
              className={"checkbox"}
              onClick={() => toggleTodoCompleteAtIndex(index)}
            >
              {todo.isCompleted && <span>&#x2714;</span>}
            </div>
            <input
              type="text"
              value={todo.content}
              onKeyDown={(event) => handleKeyDown(event, index)}
              onChange={(event) => updateTodoAtIndex(event, index)}
            />
          </div>
        ))}
      </ul>
    </form>
  );
};

export default Todo; /* 
<form className="todo-list">
<h2>Whats needs to bee done?</h2>
<ul>
  {todos.map((todo, i) => (
    <div
      key={i}
      className={`todo ${todo.isCompleted && "todo-is-completed"}`}
    >
      <div
        className={"checkbox"}
        onClick={() => toggleTodoCompleteAtIndex(i)}
      >
        {todo.isCompleted && <span>&#x2714;</span>}
      </div>
      <input
        type="text"
        value={todo.content}
        onKeyDown={(e) => handleKeyDown(e, i)}
        onChange={(e) => updateTodoAtIndex(e, i)}
      />
    </div>
  ))}
</ul>
</form> */
