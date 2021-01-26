import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_USERS} from "../redux/action-types";
import UserItem from "./UserItem";
import '../styles/user-list-styles.css'
import Post from "./Post";
import {Route, Switch} from "react-router-dom";
import PostForm from "./PostForm";

export default function UsersList() {
    const users = useSelector(store => store.users.users)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(data =>
            dispatch({type: ADD_USERS, payload: data})
        )
    }, [])

    return (
        <div className="main-list-container">
            <div className='users-list-box'>
                <ul>{users.map(item => <UserItem key={item.id} item={item} id={item.id}/>)}</ul>

            </div>
            <div>
                <Switch>
                    <Route path='/:users/:id' component={Post}/>
                    <Route path={'/post'} component={PostForm}/>
                </Switch>
            </div>

        </div>
    );
}
