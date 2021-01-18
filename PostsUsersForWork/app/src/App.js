import UserList from "./components/users/UserList";
import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App (){
    return (
   <div className="app-main-box">
       <UserList/>
   </div>


    );
}