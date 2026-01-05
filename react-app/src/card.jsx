import PropTypes from 'prop-types';

function Card(props){
    // const Rating = 4.50;
    return(
            <div className="card">
            <p className="img1">{props.img}</p>
            <p className="card-Heading">{props.Heading}</p>
            <p>{props.description}</p>
            <p >{props.Rating}</p>
            <p>{props.price}</p>
            </div>





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
    price: PropTypes.number,
    
}

export default Card ;