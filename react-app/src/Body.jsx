import Card from "./Card/card";
import Button from "./Button/button";
import biryaniImg from "./assets/biryani.webp";

function Body(){
    return(
        <>
        <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"⭐ 4.5"} price={"₹250"} />
        <Button/>
        </>     

    );
}

export default Body;
