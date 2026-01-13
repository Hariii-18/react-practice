import { useState } from "react";
import "./updateObj.css"

function StudentDetails() {

    const [IdCard, setIdCard] = useState({
        name: "Student Name",
        RollNo: "1234",
        MobileNo: "9634xxxx92",
        email: "abc@gmail.com",
    });

    return (
        <div className="ID">
            <h2>Update Object:</h2>
            < input type="text"
                placeholder="Enter your Name: "
                onChange={(event) =>
                    setIdCard({
                        ...IdCard,
                        name: event.target.value
                    })}
            />

            <input type="number,text"
                placeholder="Enter your Roll Number"
                onChange={(e) => {
                    setIdCard({
                        ...IdCard,
                        RollNo: e.target.value
                    })
                }} />

            <input type="number"
                placeholder="Enter your Number"
                onChange={(e) => {
                    setIdCard({
                        ...IdCard,
                        MobileNo: e.target.value
                    })
                }} />

            <input type="email"
                placeholder="Enter your email ID"
                onChange={(e) => {
                    setIdCard({
                        ...IdCard,
                        email: e.target.value
                    }
                    )
                }} />


            <h3>Name: {IdCard.name}</h3>
            <h3>RollNo: {IdCard.RollNo}</h3>
            <h3>MobileNo: {IdCard.MobileNo}</h3>
            <h3>email: {IdCard.email}</h3>
            <hr />
        </div>
    );
}

export default StudentDetails;