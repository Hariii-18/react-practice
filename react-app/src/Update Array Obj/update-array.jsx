import React, { useState } from "react";
import "./update-array.css"

function App() {
    const [students, setStudents] = useState([
        { id: 1, name: "Rahul", marks: 60 },
        { id: 2, name: "Anita", marks: 70 },
        { id: 3, name: "hari", marks: 60 },
    ]);

    const updateMarks = (id) => {
        const updatedStudents = students.map((student) =>
            student.id === id
                ? { ...student, marks: student.marks + 10 }
                : student
        );
        setStudents(updatedStudents);
    };
    // const updatedList = (id) => {
    //     const updatedMarks = students.map((student) => 
    //         student.id === id 
    //         ?{...student,marks: student.marks + 10}
    //         :student
    // );
    //     setStudents(updatedList);
    // };

    return (
        <div className="container">
            <hr />
            <h2 className="title">Update Array:</h2>
            <p>Example-1:</p>
            <h4>Student Marks</h4>

            {students.map((student) => (
                <div key={student.id} >
                    <p>
                        Name: {student.name} <br />
                        Marks: {student.marks}
                    </p>
                    <button className="btn" onClick={() => updateMarks(student.id)}>
                        Increase Marks
                    </button>
                </div>
            ))}
            <hr />
        </div>
    );
}

export default App;
