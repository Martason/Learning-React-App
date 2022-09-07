import { Ask } from "../components";
import { useState } from "react";

export default function Index() {
  const [lamp, setLamp] = useState("");

  const getLamp = (lamp) => {
    setLamp(lamp);
  };

  return (
    <>
      <h1>The Light</h1>
      <Ask question="Vilken lampa vill du tända?" setAnswerFunc={getLamp}></Ask>
      {lamp !== "" ? <p>{lamp} är nu tänd</p> : <p></p>}
    </>
  );
}
