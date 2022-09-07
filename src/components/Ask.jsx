import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Ask = ({question, setAnswerFunc}) => {
    const [answer, setAnswer] = useState(""); //för input

    const handleSubmit = (e) => {
        e.preventDefault()
        setAnswerFunc(answer)
    }

  return (
    <>
    <h2>{question}</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{question}</Form.Label>
        <Form.Control type="text" placeholder="" onChange={(e) => setAnswer(e.target.value)}  value={answer} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button 
      onClick={handleSubmit}
      variant="primary" 
      type="submit">
        Submit
      </Button>
    </Form> 
    </>
  );
}

export default Ask;
