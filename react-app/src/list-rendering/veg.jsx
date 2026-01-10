import './comp.css'
import PropTypes from 'prop-types';

function ListData({ items, category}) {
  return (
    <>
      <h3 className='Heading'>{category}</h3>
      <ul className='list-item' >
        {items.map(item => (
          <li key={item.id}>
            {item.name} : {item.calories}
          </li>
        ))}
      </ul>
    </>
  );
}

function List() {

  const fruits = [
    { id: 1, name: "Mango", calories: 56 },
    { id: 2, name: "Apple", calories: 95 },
    { id: 3, name: "Banana", calories: 56 },
    { id: 4, name: "Grapes", calories: 95 },
  ];

  const Meat = [
    { id: 11, name: "Chicken", calories: 560 },
    { id: 12, name: "Mutton", calories: 795 },
    { id: 13, name: "Fish", calories: 456 },
    { id: 14, name: "Red-Meat", calories: 885 },
  ];

  return (

    <>
      {fruits.length > 0 && (<ListData items={fruits} category="Fruits" />)}
      {Meat.length > 0 && (<ListData items={Meat} category="Meat" />)}
    </>
  );
}

ListData.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    calories: PropTypes.number,
  })),
};
ListData.defaultProps = {
  category: "category",
  items: [],
};

export default List;
