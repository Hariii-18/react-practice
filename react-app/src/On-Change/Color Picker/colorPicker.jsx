import { useState } from "react";
import "./colorPicker.css"

function Colorpicker() {

    const [color, setcolor] = useState("");

    function colorhandler(event) {
        setcolor(event.target.value);
    }

    return (
        <div className="Container">
            <hr />
            <h1>Color Picker</h1>
            <div className="display-box">
                <p className="color-display" style={{ backgroundColor: color }}>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value="color" onChange={colorhandler} />
            <hr />
        </div>

    );
}
export default Colorpicker;