import { useState, useEffect } from "react";
import MyForm from "./Form";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
//TODO Present 404 to the user in a neat way
//TODO use the MUI autosearch function

const About = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nameToSearch, setNameToSeach] = useState("");

  useEffect(() => {

    setNameToSeach(nameToSearch.toLowerCase())

    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nameToSearch}`
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
  }, [nameToSearch]);

  return (
    <>
    <h1>Pokemon Info</h1>
{nameToSearch == ""?(
  <>
    
    <p>Here you can search the PokeApi database to get info on your favorite pokemon.<br/>
    Enter the name of the pokemon you wish to look up. </p>
      <MyForm 
      placeholder = "Ex: Pikachu or Ditto"
      setAnswer={setNameToSeach}></MyForm>
      <br/>
      
    </>)
    :
    (<>
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
    }
    </>
  )
};

export default About;
