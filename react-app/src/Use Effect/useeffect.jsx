// useEffect()= React Hook that tells react to do some code when (pick one):
//              this component re-renders 
//              this component mounts
//              the state of a value

// useEffect(function, [dependencies])

// 1.useEffect(() => {})          Runs after every re-render
// 2.useEffect(() => {}, [])      runs only on a mount
// 3.useEffect(() => {}, [value]) runs on mount + when value changes 

// USES
// 1.event listners
// 2.DOM Manipulation
// 3.Subscriptions (real-time updates)
// 4.Fetching Data from an API
// 5.Clean up when a component unmounts

// export default UseEffect;

import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);  
  
  // without dependencies -> ut re-renders(updates) aftert every action performed
  // with empty dependencie [] -> ut renders only once (at starting) 
  // with dependency [count] -> value of count changes after every action , re-renders and updates the value (similar to without dependencies)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;