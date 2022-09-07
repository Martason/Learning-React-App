import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";

const Todo = ({ setTodolist }) => {
  /*  const [todos, setTodos] = useState([props.currentTodolist]); */
  const inputRef = useRef();
  /* 
  console.log(todos); */
  console.log(props.currentTodolist);

  useEffect(() => {
    inputRef.current.focus();
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
    <>
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
                ref={inputRef}
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
        <Button>Save</Button>
      </form>
    </>
  );
};

export default Todo;
