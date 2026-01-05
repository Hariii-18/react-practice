import PropTypes from "prop-types";
import './card.css'

function Card(props){
    // const Rating = 4.50;
    return(
        <>
            <div className="card">
                <img className="img1" src={props.img1} alt={props.Heading} />
                <p className="card-Heading">{props.Heading}</p>
                <p className="card-p">{props.description}</p>
            
            
                <div className="rating-pricing">
                <span className="rating">⭐ {props.Rating}</span>
                <span className="price">{props.price}</span>
                </div>

            </div>
        </>


        // <div className="Card">
        //     <img className="img1" src="./src/assets/biryani.webp" alt="Biryani" />
        //     <h2 className="card-Heading">Chicken Biryani</h2>
        //     <p className="card-p">A special hyderabad biryani</p>
        //     <p className="rating">Rating:{Rating} </p>
        //     <p className="price">$40</p>
        // </div>
    );
}
Card.PropTypes = {
    price: PropTypes.string,
    Rating: PropTypes.string,

}

export default Card ;