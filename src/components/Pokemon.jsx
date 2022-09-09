import { useState, useEffect } from "react";
import MyForm from "./Form";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const About = () => {
  const [pokemon, setPokemon] = useState([]);
  //TODO använda detta. 
  const [searchPokemon, setPokemonName] = useState("vivillon");


  // 'async' shouldn't be used in the useEffect callback function because these
  //callbacks are synchronous to prevent race conditions.
  //We need to put the async function inside.

  useEffect(() => {
    console.log(searchPokemon)
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
      );

      const data = await response.json();

      const pokemonObj = {
        name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"].front_default,
        type: data.types.map((arr) => arr.type.name).join(" / "),
        abilities: data.abilities.map((arr) => arr.ability.name).join(", "),
        base_experience: data.base_experience,
      };
      setPokemon(pokemonObj);
    };
    fetchData();
  }, [searchPokemon]);

  return (
    <>
      
      <MyForm 
      question={"Enter a pokemonname:"} 
      placeholder = "Ex: Pikachu or Ditto"
      setAnswer={setPokemonName}></MyForm>
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
    </>
  );
};

export default About;
