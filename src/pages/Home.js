import { Counter, Car, Ask } from "../components";
import Container from "react-bootstrap/Container";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState(""); // för appen

  const getName = (name) => {
    setName(name);
  };

  return (
    <Container>
      <h1>HOME</h1>
      <Counter></Counter>
      <Car carColor="red"></Car>
      <Ask question="Whats your name?" setAnswerFunc={getName}></Ask>
      {name !== "" ? <p>Hello {name}</p> : <p></p>}
    </Container>
  );
}
