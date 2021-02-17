import React, { useState } from 'react';

interface GraphProps {}

const Graph= ({}: GraphProps) => {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  console.log(counter)
  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
    </div>
  )
}

export default Graph
