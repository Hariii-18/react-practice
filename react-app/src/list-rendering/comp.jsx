import './comp.css'
import Veg from './veg'

function List() {

    const fruits = [
        { id: 1, name: "hari", calories: 526 },
        { id: 2, name: "apple", calories: 95 }
    ];

    return (

        <>
            {fruits.length > 0 && (<Veg items={fruits} category="Fruits" />)}
        </>
    );
}
export default List;