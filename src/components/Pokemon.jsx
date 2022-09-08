import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const About = () => {
  const [pokemon, setPokemon] = useState([]);
  const pokemonName = "vivillon";

  // 'async' shouldn't be used in the useEffect callback function because these
  //callbacks are synchronous to prevent race conditions.
  //We need to put the async function inside.

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/vivillon"
      );

      const data = await response.json();

      const pokemonObj = {
        name: data.name,
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
  }, []);

  const firstLetterToUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  //TODO funkar inte
  return (
    <>
      <p>
        If you want to know more about me check out my gitHub and Linked in page
        <br />
        On this site you vill learn more about the awesome pokemon...
        <br />
        <br />
      </p>
      <h1 style={{ color: "pink" }}>{pokemon.name}!</h1>
      <Image fluid src={pokemon.image}></Image>
      <Table responsive variant="dark" striped bordered hover size="sm">
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
