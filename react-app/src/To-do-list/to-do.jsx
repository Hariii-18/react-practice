import React, { useState } from "react";
import "./to-do.css";


function App() {

    const [Tasks, SetTask] = useState(["write home work"]);
    const [newTask, setNewTask] = useState("");

    function inputhandler(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        SetTask([...Tasks,newTask]);
        setNewTask("");
    }

    function deleteTask(index) {
        
    }

    return (
        <div>
            <div>
                <h1>To Do List</h1>
                <input type="text"
                    placeholder="Enter your Task"
                    value={newTask}
                    onChange={inputhandler} />
                <button onClick={() => addTask(index)}>Add</button>
            </div>
            <ol>
                {Tasks.map((tasks, index) =>
                    <li key={index}>
                        <span>{Tasks}</span>
                        <button onClick={() => deleteTask(index)}>delete</button>
                    </li>
                )}

            </ol>
        </div>
    );
}

export default App