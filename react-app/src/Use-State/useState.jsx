import { useState } from "react";
import "./useState.css"


// Think of it like a memory box inside your component:
// It stores data (called state).
// When the data changes, React re-renders the component to show the new value.
function Component() {
    const [count, setcount] = useState(0);
    return (
        <>
            <p>Use State: </p>
            <p>count: {count}</p>
            <button onClick={() => setcount(count + 1)} >Increment</button>
            <button onClick={() => setcount(0)}>Initial</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
        </>
    );
}

export default Component;