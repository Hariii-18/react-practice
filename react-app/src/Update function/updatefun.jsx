import { useState } from "react";
import "./updatefun.css"

import { FaHeart, FaRegHeart } from "react-icons/fa";



function LikesButton() {

    const [likes, setlikes] = useState(0);

    function Likes() {
        setlikes(prevlikes => prevlikes + 1);
    }

    return (
        <div className="container">
            <hr />
            <h1 className="para">Update Function: </h1>
            <button onClick={Likes}> {likes ? (
                <FaHeart color="red" size={30} />
            ) : (
                <FaRegHeart size={30} />
            )}</button>

            <p className="para">Likes: {likes}</p>
            <hr />

            {/* <span
                onClick={() => setlikes(!likes)}
                style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    color: likes ? "red" : "black",
                }}
            >
                {likes ? "❤️" : "🤍"}
                <p>Likes: {likes}</p>
            </span> */}
        </div>
    );
}

export default LikesButton;