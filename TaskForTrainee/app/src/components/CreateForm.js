import React, {useEffect, useState} from 'react'
import '../styles.css'
import GroceryList from "./GroceryList";
import {Context} from "../context";


export default function TodosCreateForm() {


    const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [countId, setCountId] = useState(0);


    const myRef = React.createRef()
    const addItem = () => {
        setCountId(count => count + 1)
        setListItems( [...listItems,{
            value:myRef.current.value,
            id:countId,
            flag:true,
            count:1}])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listItems));
    }, [listItems]);

    const updateItems = (updatedItems) => {
        localStorage.setItem("todos", JSON.stringify(updatedItems));
        setListItems(updatedItems);
    };

    return (
        <Context.Provider value={{updateItems,listItems}}>
            <div>

                <input type="text" className='add-input' ref={myRef}/>

                <button onClick={() => addItem()}>
                    Add to grocery list
                </button>

                {!!listItems && listItems.map((item, index,array) => <GroceryList key={index} item={item} value={item.value} flag={item.flag} listItems={array}/>)}
            </div>
        </Context.Provider>
    );
}
