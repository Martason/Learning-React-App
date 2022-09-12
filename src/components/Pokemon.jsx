

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import {Autocomplete, TextField} from '@mui/material'
import Button from 'react-bootstrap/Button';

import MyAutocomplete from "./MyAutocomplete";
{/* <MyAutocomplete
array={pokemonNames}
handleSubmit={setNameToSeach}
/> */}

//TODO style
//TODO * cleaner code?
// Util .charAt(0).toUpperCase() + data.name.slice(1)
//TODO move to another component

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nameToSearch, setNameToSeach] = useState("");
  const [searchOk, setSearchOk] = useState(true);

  const [pokemonNames, setPokemonNames] = useState([]);
  const [value, setValue] = useState("");


  useEffect(() => {

    setNameToSeach(nameToSearch.toLowerCase())

    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameToSearch}`
      );
      setSearchOk(response.ok);

      const data = await response.json();
      // Gör om Abilities array till att endast innehålla namnet på abilitis (fortfarande en array)
      const pokemonAbilitiesName = data.abilities.map((arr) => arr.ability.name)//TODO *

      const pokemonObj = {
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),//TODO *
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types.map((arr) => arr.type.name).join(" / "),//TODO *
        // Gör om Abilities array till en string OCH ändrar till stor bokstav på varje ability
        abilities: pokemonAbilitiesName.map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(", "), //TODO *
        base_experience: data.base_experience,
      };
      setPokemon(pokemonObj);
    };
    fetchData();
  }, [nameToSearch]);

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

  const arr = pokemonData.results.map((item) => item.name.charAt(0).toUpperCase() + item.name.slice(1))//TODO * move to app.js? how?

     setPokemonNames(arr)
    }
    fetchPokemonNames()
  }, [])

  const handleSubmit = () => {
    setNameToSeach(value)
    setValue("")
  }

  return (
    <div className="pokemonPage">
    <h1>Pokemon Info</h1>
    <p>Here you can search the PokeApi database to get info on your favorite pokemon.
    Enter the name of the pokemon you wish to look up. </p>
    <br/>
{nameToSearch === "" && searchOk ?(
  <>
    <Autocomplete
      options={pokemonNames}
      sx={
        {width: 250 }
      }
      renderInput={(params) => <TextField {...params} 
      label="Pokemon name" />}
      noOptionsText={"No pokemon with that name could be found"}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      //TODO fråga gänget* varför newValue?
    />
          <br/>
    <Button 
    onClick={handleSubmit}>
      Search</Button>
   
    </>)
    :
    (<>
    <h4>Search another pokemon:</h4>
    <Autocomplete
      options={pokemonNames}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pokemon name" />}
      noOptionsText={"No pokemon with that name could be found"}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
    />
    <br/>
     <Button 
    onClick={handleSubmit}>
      Search</Button>
  
      <br/>
  <h1>{pokemon.name}!</h1>
      <Image fluid src={pokemon.image}></Image>
      <Table style={{ color: "white" }} bg="" responsive bordered size="sm">
        <thead>
          <tr>
            <th>Height:</th>
            <td>{pokemon.height}</td>
          </tr>
          <tr>
            <th>Weight:</th>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{pokemon.type}</td>
          </tr>
          <tr>
            <th>Abilities:</th>
            <td>{pokemon.abilities}</td>
          </tr>
          <tr>
            <th>Experience:</th>
            <td>{pokemon.base_experience}</td>
          </tr>
        </thead>
      </Table>
      </>)
    }
    </div>
  )
};

export default PokemonInfo;
