import React, { useState } from "react";

function component() {

    const [name, setName] = useState();
    const UpdateName=() => {
        UpdateName = "Harii";
        console.log(UpdateName);
    }

    return ( 
            <div>
                <p>Name: </p>
                <button onClick={UpdateName}>Set Name</button>
            </div>
     );
}

export default component;