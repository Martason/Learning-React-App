import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Ask = ({question, setAnswerFunc}) => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setAnswerFunc(answer)
    }

  return (
    <>
    <h3>{question}</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control autoComplete='off' type="text" placeholder="" onChange={(e) => setAnswer(e.target.value)}  value={answer} />
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
