import React, { useState } from "react";
import "./to-do.css"

function Todo() {
    const [tasks, setTasks] = useState([]);   //tasks = stores all the to-do items , setTasks = updates the list
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input === "") return;
        if (input.trim() === "") return;
        const NewTask = {
            id: Date.now(),
            text: input,
            completed: false,
            important: false,
        };
        setTasks([...tasks, NewTask]);
        setInput("");
    }

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    const CompleteTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ?
                { ...task, completed: !task.completed }
                : task
        );
        setTasks(updatedTasks);
    };

    const ImportantTaks = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id
                ? { ...task, important: !task.important }
                : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>TO-DO List</h1>
            <input value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" placeholder="Enter your Task " />

            <button onClick={addTask}>Add</button>

            <ol>
                {tasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{
                                textDecoration: task.completed ? "line-through" : "none"
                            }}>
                            {task.text}
                        </span>
                        <button onClick={() => CompleteTask(task.id)}>complete</button>
                        <button onClick={() => ImportantTaks(task.id)}>star</button>
                        <button onClick={() => deleteTask(task.id)}>delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todo;