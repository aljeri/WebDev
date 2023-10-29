import React, { useState, useEffect } from 'react';


function Counter_2(){
const [count, setCount] = useState(0);

useEffect (()=>{
    //what will happen 
    alert('count change');
    //optional return 
    //return (console.log('clearing out..'));
},[count]); //count is the dependency

return (
  <div>
    <h4>Count Function with useEffect: {count}</h4>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
);
}

export default Counter_2;