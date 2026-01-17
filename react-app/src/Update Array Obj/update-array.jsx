// import React, { useState } from "react";

// function StudentsMarks() {

//     const [marks, setMarks] = useState([
//         { id: 101, name: "hari", marks: 75 },
//         { id: 102, name: "Rahul", marks: 64 },
//         { id: 103, name: "mahesh", marks: 93 },
//     ]);

//     const UpdateMarks = (id) => {
//         setMarks = StudentsMarks.map
//     }

//     return (
//         <div>
//             <hr />
//             <h3>Update Array Object: </h3>
//             <input type="text"  />

//         </div>
//     );
// }

// export default StudentsMarks



import React, { useState } from "react";
import "./update-array.css"

function App() {
    const [students, setStudents] = useState([
        { id: 1, name: "Rahul", marks: 60 },
        { id: 2, name: "Anita", marks: 70 },
        { id: 3, name: "hari", marks: 60},
    ]);

    const updateMarks = (id) => {
        const updatedStudents = students.map((student) =>
            student.id === id
                ? { ...student, marks: student.marks + 10 }
                : student
        );

        setStudents(updatedStudents);
    };

    return (
        <div className="items">
            <hr />
            <h2>Update Array:</h2>
            <p>Example-1:</p>
            <h4>Student Marks</h4>

            {students.map((student) => (
                <div key={student.id} >
                    <p>
                        Name: {student.name} <br />
                        Marks: {student.marks}
                    </p>
                    <button onClick={() => updateMarks(student.id)}>
                        Increase Marks
                    </button>
                </div>
            ))}
            <hr />
        </div>
    );
}

export default App;
