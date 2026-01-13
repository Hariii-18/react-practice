import { useState } from "react";
import "./colorPicker.css"

function Colorpicker() {

    const [color, setcolor] = useState(" ");

    function colorhandler(event) {
        setcolor(event.target.value);
    }

    return (
        <div className="Container">
            
            <h1>Color Picker</h1>
            <div className="display-box">
                <p className="color-display" style={{ backgroundColor: color }}>Selected Color: {color}</p>
            </div>
            <label className="colorlabel">Select a color: </label>
            <input type="color"  onChange={colorhandler} />
            <hr />
            
        </div>

    );
}
export default Colorpicker;