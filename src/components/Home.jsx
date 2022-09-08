import { Ask } from ".";

const Home = ({ name, setName }) => {
  return (
    <>
      <h1>Hello!</h1>

      <Ask question="Whats your name?" setAnswerFunc={setName}></Ask>
      <br></br>
      {name !== "" ? (
        <>
          <h3> Hi {name}!</h3>
          <p>
            My name is Märta and on this webbapp I crash and burn to learn
            react. It's quite the mess I know, but hopefully I learn some cool
            trixs to bring to my next, more coherent project
            <br></br>
            <br></br>
            Please have a look around
          </p>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Home;
