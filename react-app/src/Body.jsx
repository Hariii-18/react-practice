import Card from "./Card/card";
import Button from "./Button/button";
import biryaniImg from "./assets/biryani.webp";
import Greeting from "./Conditional-rendering/greeting-msg";
import List from "./list-rendering/veg"
import Usestate from "./Use-State/useState";
import LoginForm from "./Use-State/login-form";

function Body(){
    return(
        <>
        <Greeting isLoggedIn={true} userName="Harii" />
        <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"4.5"} price={"₹250"} />
        <Button/>
        <List/>
        <Usestate/>
        {/* <LoginForm/> */}
        </>     

    ); 
}


export default Body;
