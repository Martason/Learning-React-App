import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo, Home, TheLight, About } from "./pages";
import Navbar from "./components/Navbar";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Container fluid="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/TheLight" element={<TheLight />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
