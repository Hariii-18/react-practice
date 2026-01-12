import { useState } from "react";
import "./useState.css"


// Think of it like a memory box inside your component:
// It stores data (called state).
// When the data changes, React re-renders the component to show the new value.
function Component() {
    const [count, setcount] = useState(0);
    return (
        <div className="use-state-container">
            <p className="use-state-title">Use State: </p>
            <p className="use-state-count">count: {count}</p>
            <div className="use-state-buttons">
                <button onClick={() => setcount(count + 1)}>Increment</button>
                <button onClick={() => setcount(0)}>Reset</button>
                <button onClick={() => setcount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Component;