import React,{useEffect,useState} from 'react'
import UserItem from "./UserItem";
import './user.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import PostList from "../posts/PostList";

export default function UserList (){


 const [usersData,setUsersData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).then(data=>setUsersData(data))
    },[])




    return (
        <Router>
        <div className="user-box">

            {!!usersData && usersData.map((value,id)=>(<UserItem key={id} item={value} id={value.id}/>))}
        </div>

        </Router>
    );
}