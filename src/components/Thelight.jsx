import { MyForm, Counter, DiscoLight } from ".";
import { useState } from "react";

import Image from "react-bootstrap/Image";
/*
TODO enter a random funktion that display diffrent messages
<h3>The {lamp} now lights up the room</h3>
<h3>The {lamp} fills the room with its cosy dim light</h3>
<h3>Wow. you can really see all the dirt thanx to the {lamp} </h3>
<h3>Thats to bright! Turn off the {lamp} ! </h3>
*/

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
      <div >
     
        <h3>The {lamp} now lights up the room</h3>
       
        <br />
        <br />
        <p>
        In the future I would like to hook this up with my arduino and actually let the user light a
        lamp in my house.
        <br />
        <br />
        But have fun with this counter component in the meantime
        <Counter />
        <br/>
        <br/>
        <br/>
        Or perhaps you would like to light a lamp?
        </p>
        <MyForm 
      placeholder="Ex Bedroomlamp"
      setAnswer={getLamp}></MyForm>
  
     </div>
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