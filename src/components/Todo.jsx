import React, { useEffect, useRef } from "react";

const Todo = ({ todos, setTodos }) => {

  const textInput = useRef(null);
  console.log(todos.length)

  useEffect(() => {
    if(todos.length === 0){
      createTodoAtIndex(todos.length - 1);
    } 
    else{
    setTimeout(() => {
      document.forms[0].elements[todos.length - 1].focus();
    }, 0)}
  }, []);

  function handleKeyDown(e, i) {
    console.log(todos)
    
    if (e.key === "Enter" && todos[i].content !== "") {
      createTodoAtIndex(i);
    }
    if (e.key === "Backspace" && todos[i].content === "") {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  function createTodoAtIndex(i) {
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
    <h1>Todolist</h1>
      <h4>Whats needs to bee done?</h4>
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
    </>
  );
};

export default Todo;
