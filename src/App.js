import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Todo, Home, TheLight, About } from "./pages";
import Navbar from "./components/Navbar";
import { useState } from "react";

//TODO lift state
function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState([]);

  return (
    <div className="app">
      <Navbar />
      <div className="component">
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} />} />
          <Route
            path="/Todo"
            element={<Todo todos={todos} setTodos={setTodos} />}
          />
          <Route path="/TheLight" element={<TheLight />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
