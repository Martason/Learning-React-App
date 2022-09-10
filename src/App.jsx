
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Todo, Pokemon, TheLight, Home } from "./components";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

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
          <Route path="/PokemonInfo" element={<Pokemon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
