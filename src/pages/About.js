import Dropdown from "react-bootstrap/Dropdown";

function About() {
  const questions = [{}];
  return (
    <>
      <h1>About</h1>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dance
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
          <Dropdown.Item href="#/action-2">No</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default About;
