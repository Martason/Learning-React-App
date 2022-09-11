
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Todo, PokemonInfo, TheLight, Home } from "./components";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState([]);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const fetchPokemonNames = async () => {
      let url;
      let count;
  
      url = new URL("https://pokeapi.co");
      url.pathname = "/api/v2/pokemon";
  
      const countData = await fetch(url).then((response) =>
        response.json()
      );

      count = countData.count;
      url.searchParams.set("limit", count);
  
      const pokemonData = await fetch(url).then((response) =>
        response.json()
      );

     setPokemonNames(pokemonData.results.map((item) => item.name))
    }

    fetchPokemonNames()
  }, [])

  return (
  
    <div className="app">
      <Navbar />
      <div className="component">
        <Routes>
          <Route path="/" 
            element={<Home 
              name={name} 
              setName={setName} />} 
          />
          <Route path="/Todo"
            element={<Todo 
              todos={todos} 
              setTodos={setTodos} />}
          />
          <Route path="/TheLight" 
            element={<TheLight />} 
          />
          <Route path="/PokemonInfo" 
            element={<PokemonInfo
            pokemonNames = {pokemonNames} />} 
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
