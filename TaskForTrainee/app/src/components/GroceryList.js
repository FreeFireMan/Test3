import React, {useState,useContext} from 'react'
import '../styles.css'
import ItemEdit from "./ItemEdit";
import {Context} from "../context";




export default function TodoItem({item,flag,value,array}) {

    let {listItems,updateItems} = useContext(Context);

    const [state,setState] = useState(false);
    const [field,setField] = useState('edit');

    const changeState = () =>{
        if(state){
            setState(false);
            setField('edit')


        }
        else{
            setState(true);
            setField('save')
        }
    }

    const addItem = (event) => {
        event.preventDefault();

        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));

        for (const element of itemFromStorage) {
            if(item.id === element.id){
                element.count = element.count + 1;
            }
        }
        updateItems(itemFromStorage)
    }

    const deleteItem = () => {
        // event.preventDefault(); навіщо це тут?
        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));
        //
        // for (let element of itemFromStorage) {
        //     if(item.id === element.id){
        //         console.log(element);
        //         itemFromStorage.splice(item.id,1)
        //         console.log(itemFromStorage.splice(item.id))
        //     }
        // }
        const newArray = itemFromStorage.filter(todo => todo.id !== item.id)
        updateItems(newArray)
    }

    return (
        <div className="list-box">

            <div className="item">
                <span>{value}-{item.count}шт</span>
                <button className='edit-btn' onClick={changeState}>{field}</button>
                <button className="delete-btn" onClick={deleteItem}>delete</button>
                <button className="plus-item-btn" onClick={addItem}>+1</button>
                <button className="minus-item-btn" onClick={addItem}>-1</button>
                { state && <ItemEdit item={item}/>}

            </div>
        </div>
    );
}
