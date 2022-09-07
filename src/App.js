import "./App.css";
import React from "react";
import { Todo, Home, TheLight, About } from "./pages";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Container from "react-bootstrap/Container";

function App() {
  const [todolist, setTodolist] = useState([
    { contet: "", IsCompletet: false },
  ]);
  console.log(todolist);

  /*   const updateTodolist = (newTodolist) => {
    setTodolist(newTodolist);
  }; */
  //TODO route vs. switch case
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />;
      break;
    case "/Todo":
      page = <Todo currentTodolist={todolist} {...{ setTodolist }} />;
      break;
    case "/TheLight":
      page = <TheLight />;
      break;
    case "/About":
      page = <About />;
      break;
    default:
      page = <Home />;
  }
  return (
    <Container fluid="md">
      <div className="app">
        <Navbar />
        <div>{page}</div>
      </div>
    </Container>
  );
}

export default App;
