import React from 'react';



export default function EditField ({item}){
    console.log(item,'before');
    const  changeValue = (event) => {
       event.preventDefault();
      const inputValue = event.target[0].value

        const itemFromStorage = JSON.parse(localStorage.getItem('todos'));

        for (const element of itemFromStorage) {
            console.log(element.id);
            itemFromStorage.splice(element.id,1)
        }

   }

    return (
        <div>
            <form action="" onSubmit={changeValue}>
                <input type="text"/>
                <button>save</button></form>

        </div>
    );
}