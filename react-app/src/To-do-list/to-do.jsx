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
        <div className="Container">
            <div>
                <h1 className="heading">To Do List</h1>
                <input type="text"
                    placeholder="Enter your Task"
                    value={newTask}
                    onChange={inputhandler} />
                <button className="add-button" onClick={() => addTask(index)}>Add</button>
            </div>
            <ol>
                {Tasks.map((tasks, index) =>
                    <li key={index}>
                        <span>{Tasks}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                    </li>
                )}

            </ol>
        </div>
    );
}

export default App