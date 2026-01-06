import Card from "./Card/card";
import Button from "./Button/button";
import biryaniImg from "./assets/biryani.webp";
import Greeting from "./greeting-msg/greeting-msg";

function Body(){
    return(
        <>
        
        <Greeting IsLoggedIn={false} userName="Harii" />
        <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"⭐ 4.5"} price={"₹250"} />
        
        <Button/>
        </>     

    ); 
}

export default Body;
