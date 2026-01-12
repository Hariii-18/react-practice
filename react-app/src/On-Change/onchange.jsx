// onChange = event handler used to primarily woth form elements
//            ex: <input> , <textarea> , <select> , <radio>
//            Triggers a function every time when the value of the input changes

import { useState } from "react";

function onChange(){

    const [name, setName] = useState("");
    const [age,setAge] = useState("");
    function textonchange(event){
        setName(event.target.value);
    }
    function AgeSetter(event){
        setAge(event.target.value);
    }
    return( 
        <div>
        <input placeholder="Enter your Name here" value={name} type="text"  onChange={textonchange} />
        <p>Name: {name}</p>

        <input placeholder="Enter your age" type="number" value={age} onChange={AgeSetter}/>
        <p>Age:{age}</p>
        </div>
    );
}


export default onChange;