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
    console.log(state,'state');
    return (
        <div className="list-box">

            <div className="item">
                 <p >{value}</p>
                <button className='edit-btn' onClick={changeState}>{field}</button>
                { state && <EditField item={item}/>}

            </div>
        </div>
    );
}