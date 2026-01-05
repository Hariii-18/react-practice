import Card from "./card";
import Button from "./Button/button";

function Body(){
    return(
        <>
        <Card  Heading="Biryani" description="delicious hyderabadi biryani" Rating={4.5} price={$40} />
        <Card/>
        <Button/>
        </>     

    );
}

export default Body;
