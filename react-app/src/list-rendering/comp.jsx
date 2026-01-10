import './comp.css'

function List(){
    const Fruits = [
        {id:1 , name:"Mangoo", calories: 56},
        {id:2 , name:"Mangoo", calories: 56},
        {id:3 , name:"Mangoo", calories: 56},
        {id:4 , name:"Mangoo", calories: 56},

    ];
    return (
        <>
        <List items ={Fruits} category="Fruits"/>
        </>
    );
}

export default List;