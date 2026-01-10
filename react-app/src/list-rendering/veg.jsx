import './comp.css'

function ListData({ items, category }) {
  return (
    <>
      <h3>{category}</h3>
      <ol>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.calories}
          </li>
        ))}
      </ol>
    </>
  );
}
// import Veg from './veg'

function List() {

  const fruits = [
    { id: 1, name: "Mango", calories: 56 },
    { id: 2, name: "apple", calories: 95 },
    { id: 3, name: "Banana", calories: 56 },
    { id: 4, name: "Grapes", calories: 95 },
  ];

  const NonVeg = [
    { id: 11, name: "Chicken", calories: 560 },
    { id: 12, name: "Mutton", calories: 95 },
    { id: 13, name: "Fish", calories: 56 },
    { id: 14, name: "Red-Meat", calories: 95 },
  ];

  return (

    <>
      {fruits.length > 0 && (<ListData items={fruits} category="Fruits" />)}
      {NonVeg.length > 0 && (<ListData items={NonVeg} category="Meat" />)}
    </>
  );
}
export default List;
// export default ListData;
