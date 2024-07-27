import "./shopping.css";
import { useState, useEffect } from "react";
import useLocalStorage from '../hooks/useLocalStorage';

//by using custom hook i.e. useLocalStorage
function Shopping1() {
  const [shoppingList, setShoppingList] = useLocalStorage('shoppingList', []);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    setShoppingList([...shoppingList, newItem]);
    setNewItem("");
  };

  const handleRemoveItem = (itemToDelete) => {
    setShoppingList(shoppingList.filter((item) => item !== itemToDelete));
  };
 
  return (
    <div className="App">
      <h1>Shopping list</h1>
      <div>
        <form onSubmit={handleAddItem}>
          <input
            name="newItem"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Add item</button>
        </form>
      </div>
      <ul>
        {shoppingList.map((item) => (
          <li>
            {item}
            <button onClick={() => handleRemoveItem(item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}



//by using local storage
function Shopping2() {
  //const [shoppingList, setShoppingList] = useState([]);
  const [shoppingList, setShoppingList] = useState(()=>{
  const list = localStorage.getItem('shoppingList');
  return list ? JSON.parse(list) : [];
  });
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    setShoppingList([...shoppingList, newItem]);
    setNewItem("");
  };

  const handleRemoveItem = (itemToDelete) => {
    setShoppingList(shoppingList.filter((item) => item !== itemToDelete));
  };
 
  useEffect(()=> {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <div>
        <form onSubmit={handleAddItem}>
          <input
            name="newItem"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button type="submit">Add item</button>
        </form>
      </div>
      <ul>
        {shoppingList.map((item) => (
          <li>
            {item}
            <button onClick={() => handleRemoveItem(item)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping1;
