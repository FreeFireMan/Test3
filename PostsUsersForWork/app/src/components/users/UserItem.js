import {Link} from "react-router-dom";
import React from "react";

export default function UserItem ({item,id}){
    return (
        <ul>
            <li>{item.id}-{item.name}-{item.username} <button><Link to='/posts'>posts</Link></button>
                <button>details</button></li>
        </ul>
    );
}