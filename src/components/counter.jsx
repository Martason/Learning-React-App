import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <br />
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <br />
      Can you spot the useEffecs?
    </>
  );
}
