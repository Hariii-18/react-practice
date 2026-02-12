import Card from "./Card/card";
import Button from "./Button/button";
import biryaniImg from "./assets/biryani.webp";
import Greeting from "./Conditional-rendering/greeting-msg";
import List from "./list-rendering/veg"
import Usestate from "./Use-State/useState";
import LoginForm from "./Use-State/login-form";
import Onchange from "./On-Change/onchange";
import Colorpicker from "./On-Change/Color Picker/colorPicker"
import Updatefun from "./Update function/updatefun"
import UpdateObj from "./Update Object/updateObj"
import UpdateArray from "./Update Array Obj/update-array"
import Qty from "./Update Array Obj/Qty-increase"
import Todo from "./To-do-list/to-do"
import Useeffect from "./Use Effect/useeffect"

function Body() {
    return (
        <>
            <Greeting isLoggedIn={true} userName="Harii" />
            <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"4.5"} price={"₹250"} />
            <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"3.9"} price={"₹350"} />
            <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"5.0"} price={"₹300"} />
            <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"4.5"} price={"₹200"} />
            <Card img1={biryaniImg} Heading="Biryani" description="delicious hyderabadi biryani" Rating={"4.6"} price={"₹150"} />
            <Button />
            <List />
            <Usestate />
            {/* <LoginForm/> */}
            <Onchange />
            <Colorpicker />
            <Updatefun />
            <UpdateObj />
            <UpdateArray />
            <Qty />
            {/* <Todo /> */}
            <Useeffect />
        </>

    );
}


export default Body;
