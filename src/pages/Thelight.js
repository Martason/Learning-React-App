import { Ask, Counter } from "../components";
import { useState } from "react";

export default function Index() {
  const [lamp, setLamp] = useState("");

  const getLamp = (lamp) => {
    setLamp(lamp);
  };

  return (
    <>
      <h1>The Light</h1>
      <br></br>

      <Ask question="Vilken lampa vill du tända?" setAnswerFunc={getLamp}></Ask>
      <br></br>
      {lamp !== "" ? (
        <p>
          {lamp} är nu tänd
          <br />
          <br />
          In the future I want to build a webapp that alows the user to light a
          lamp in my house. But I struggle to find the place and time to play
          aorund with my arduino.
          <br />
          <br />
          Please, know yourself out with this fun component in the meantime
          <Counter />
        </p>
      ) : (
        <p></p>
      )}
    </>
  );
}
