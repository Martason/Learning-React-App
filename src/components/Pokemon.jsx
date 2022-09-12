import React, { useState, useEffect } from "react";
import MyForm from "./Form";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import {Stack, Autocomplete, TextField} from '@mui/material'
import {Box} from "@mui/system"

//TODO Present 404 to the user in a neat way
//TODO use the MUI autosearch function
//TODO * Hur göra det snyggare? 

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nameToSearch, setNameToSeach] = useState("");
  const [searchOk, setSearchOk] = useState(true);
  const [pokemonNames, setPokemonNames] = useState([]);
  const [value, setValue] = useState("");
  console.log(value)


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
  console.log(pokemonData)
  const arr = pokemonData.results.map((item) => item.name)
  console.log(arr)
     setPokemonNames(arr)
    }

    fetchPokemonNames()
  }, [])

  return (
    <>
    <h1>Pokemon Info</h1>
{nameToSearch === "" && searchOk ?(
  <>
    
    <p>Here you can search the PokeApi database to get info on your favorite pokemon.<br/>
    Enter the name of the pokemon you wish to look up. </p>
    <Stack spacing={2} width="250px">
    <Autocomplete
      /* disablePortal*/
      id="pokemonSearchbar"
      options={pokemonNames}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pokemon name" />}
      noOptionsText={"No pokemon with that name could be found"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    </Stack>
{/* 
      <MyForm 
      placeholder = "Ex: Pikachu or Ditto"
      setAnswer={setNameToSeach}></MyForm>
      <br/> */}
      
    </>)
    :
    nameToSearch !== "" && searchOk ?
    (<>
    <p>Search another pokemon</p>
      <MyForm 
      placeholder = "Ex: Eevee or Ditto"
      setAnswer={setNameToSeach}></MyForm>
      <br/>
  <h1 style={{ color: "pink" }}>{pokemon.name}!</h1>
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
      :
      (
        <>
        <p>No pokemon with that name came up? try again</p>
      <MyForm 
      placeholder = "Ex: Eevee or Ditto"
      setAnswer={setNameToSeach}></MyForm>
      <br/>
      
        </>

      )
    }
    </>
  )
};

export default PokemonInfo;
