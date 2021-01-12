import React, {useState} from 'react'
import '../styles.css'
import EditField from "./EditField";



export default function TodoItem({item,flag,value,array}) {
    // const changeStatus = () =>{
    //     if (flag){
    //         flag = false;
    //     }
    //     else{
    //         flag = true;
    //     }
    // }   //onClick={()=>changeStatus()} style={{textDecoration :flag ? 'none' : 'lineThrough'}}
    const [state,setState] = useState(false);
    console.log(item,'todoItem');
    const changeState = () =>{
       if(state){
           setState(false)
       }
       else{
           setState(true)
       }
   }
    const editItem = ()=>{

    }
    return (
        <div className="list-box">

            <div className="item">
                 <p >{value}</p>
                <button className='edit-btn' onClick={changeState}>edit</button>
                { state && <EditField item={item}/>}

            </div>
        </div>
    );
}