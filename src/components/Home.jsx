import  MyForm  from "./Form";

const Home = ({ name, setName }) => {
  return (
    <>
      {name == ""?(
      <>
      <h1>Hello!</h1>
      <MyForm 
      question="Whats your name?" 
      placeholder=""
      setAnswer={setName}></MyForm>
      <br></br>
      </>)
      :
      (<>
        <h1> Hi {name}!</h1>
          <p>
            My name is Märta and on this webbapp I crash and burn to learn
            react. It's quite the mess I know, but hopefully I learn some cool
            trixs to bring to my next, more coherent project
            <br></br>
            <br></br>
            Please have a look around
          </p>
          <div>
          <MyForm
          placeholder={`Not ${name}?`}
          setAnswer={setName}>
          </MyForm>
          </div>
      </>)
    }
</>
  );
};

export default Home;
