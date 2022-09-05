import "./App.css";
import React from "react";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import About from "./pages/About";
import TheLight from "./pages/Thelight";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  let page;
  switch (window.location.pathname) {
    case "/":
      page = <Home />;
      break;
    case "/Todo":
      page = <Todo />;
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
