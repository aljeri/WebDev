import React, { useState } from 'react';

function Counter_1() {
  //set initial state of the variable count
  const [count, setCount] = useState(0); 

  return (
    <div>
      <h4>Count Function: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter_1;
