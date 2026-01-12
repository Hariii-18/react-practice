// onChange = event handler used to primarily woth form elements
//            ex: <input> , <textarea> , <select> , <radio>
//            Triggers a function every time when the value of the input changes

import { useState } from "react";
import "./onchange.css"

function onChange() {

    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [comment,setcomment] = useState("");

    const [state, setstate] = useState("");

    function textonchange(event) {
        setName(event.target.value);
    }

    function AgeSetter(event) {
        setAge(event.target.value);
    }

    function CommentBox(event){
        setcomment(event.target.value)
    }

    function selectState(e){
        setstate(e.target.value);
    }

    return (
        <div className="container">
            <p className="head">Onchange Event Handler:</p>
            <input className="inputs" placeholder="Enter your Name here" value={name} type="text" onChange={textonchange} />
            <p className="para">Name: {name}</p>

            <input className="inputs" placeholder="Enter your age" type="number" value={age} onChange={AgeSetter} />
            <p className="para">Age:{age}</p>

            <input className="inputs" placeholder="Write your Comment Here " value={comment} onChange={CommentBox}/>
            <p className="para">Comment: {comment}</p>

            <select className="selector" value={state} onChange={selectState}>
                <option value="" disabled selected>Select your State:</option>
                <option value="Telangana">Telangana</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="amil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            <p className="para">State: {state}</p>
        </div>
    );
}
// 2:09:26

export default onChange;