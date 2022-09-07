import { Ask } from "../components";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const getName = (name) => {
    setName(name);
  };

  return (
    <>
      <h1>Hello</h1>
      <p>
        My name is Märta and this webbapp is where displays all the cool react
        skills I learnt
      </p>
      <Ask question="Whats your name?" setAnswerFunc={getName}></Ask>
      <br></br>
      {name !== "" ? <h2>Hello {name}!</h2> : <p></p>}
    </>
  );
}
