import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const MyForm = ({question, placeholder, setAnswer}) => {
    const [submit, setSubmit] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setAnswer(submit)
        setSubmit("")
    }

  return (
    <>
    <h3>{question}</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        autoComplete='off' 
        type="text" 
        placeholder={placeholder} 
        onChange={(e) => setSubmit(e.target.value)} 
        value={submit}
        />
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

export default MyForm;
