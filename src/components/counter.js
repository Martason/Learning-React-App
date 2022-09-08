import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
      <p>You clicked {count} times</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      Can you spot the useEffecs?
    </>
  );
}
