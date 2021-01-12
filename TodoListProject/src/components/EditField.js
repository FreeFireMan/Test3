import React from 'react';

export default function EditField({item}) {
    console.log(item, 'before');

    const changeValue = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value

        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));

        for (const element of itemFromStorage) {
            if(item.id === element.id){
                element.value = inputValue;
            }
        }
        localStorage.setItem('todos',JSON.stringify(itemFromStorage))

    }
    const storageHandler = ()=>{
        console.log('222222')
    }
    window.addEventListener("storage", storageHandler);
    return (
        <div>
            <form action="" onSubmit={changeValue}>
                <input type="text"/>
                <button>save</button>
            </form>

        </div>
    );
}