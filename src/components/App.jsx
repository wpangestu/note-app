import {useState} from "react";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import GroceryList from "./GroceryList.jsx";
import Footer from "./Footer.jsx";
function App() {
    const [items,setItems] = useState(groceryItems);

    function handleAddItem(item){
        setItems([...items,item]);
    }

    function handelDeleteItem(id){
        setItems((items)=>items.filter((item)=>item.id!==id))
    }

    function handleToggleItem(id){
        setItems((items)=>items.map((item)=>(item.id===id?{...item,checked: !item.checked}:item)))
    }

    function handleClearAllItem(){
        setItems([]);
    }

    return (
      <div className="app">
          <Header/>
          <Form onAddItem={handleAddItem} />
          <GroceryList items={items} onDeleteItem={handelDeleteItem} onToggleItem={handleToggleItem} onClearAllItem={handleClearAllItem}/>
          <Footer items={items}/>
      </div>
    );
}

const groceryItems = [
    {
        id: 1,
        name: 'Kopi Bubuk',
        qty: 2,
        checked: true,
    },
    {
        id: 2,
        name: 'Gula Pasir',
        qty: 5,
        checked: false,
    },
    {
        id: 3,
        name: 'Air Mineral',
        qty: 3,
        checked: false,
    },
];

export default App
