import { MyForm, Counter } from ".";
import { useState } from "react";

const TheLight = () => {
  const [lamp, setLamp] = useState("");

  const getLamp = (lamp) => {
    setLamp(lamp);
  };

  return (
    <>    
    <h1>The Light</h1>
      <br></br>
    {lamp !== "" ? (
      <p>
        <h3>The {lamp} now lights up the lights up the room</h3>
        <br />
        <br />
        In the future I would like to hook this up with my arduino<br/> and actually let the user light a
        lamp in my house.
        <br />
        <br />
        But have fun with this counter component in the meantime
        <Counter />
      </p>
    ) : (
      <>
      <MyForm 
      question="Vilken lampa vill du tända?" 
      placeholder="Ex Kitchenlamp"
      setAnswer={getLamp}></MyForm>
      <br></br>
      </>
    )}
      

      
      
    </>
  );
};
export default TheLight;
/* (
  <>
    <h1>The Light</h1>
    <br></br>

    <MyForm 
    question="Vilken lampa vill du tända?" 
    placeholder="Ex Kitchenlamp"
    setAnswer={getLamp}></MyForm>
    <br></br>
    {lamp !== "" ? (
      <p>
        <h3>The {lamp} now lights up the lit</h3>
        <br />
        <br />
        In the future I would like to hook this up with my arduino<br/> and actually let the user light a
        lamp in my house.
        <br />
        <br />
        But have fun with this counter component in the meantime
        <Counter />
      </p>
    ) : (
      <p></p>
    )}
  </>
); */