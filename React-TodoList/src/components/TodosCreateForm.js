import React, {useEffect, useState} from 'react'
import '../styles.css'
import TodoItem from "./TodoItem";
import {Button} from "antd";
import {Context} from "../context";


export default function TodosCreateForm() {


     const [listItems, setListItems] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [count, setCount] = useState(0);

    console.log(listItems);

    const myRef = React.createRef()
    const addItem = () => {
        setCount(count => count + 1)
        setListItems( [...listItems,{
            value:myRef.current.value,
            id:count,
            flag:true}])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(listItems));
    }, [listItems]);

    const updateItems = (updatedItems) => {
        localStorage.setItem("items", JSON.stringify(updatedItems));
        setListItems(updatedItems);
    };

    return (
        <Context.Provider value={{updateItems,listItems}}>
        <div>

            <input type="text" className='add-input' ref={myRef}/>

            <Button type="primary" onClick={() => addItem()}>
                Add to list
            </Button>

            {!!listItems && listItems.map((item, index,array) => <TodoItem key={index} item={item} value={item.value} flag={item.flag} listItems={array}/>)}
        </div>
        </Context.Provider>
    );
}