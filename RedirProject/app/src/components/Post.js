import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {ADD_CHOSEN_POST} from "../redux/action-types";

export default function Post() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const {posts} = useSelector(store => store.posts)
    console.log(posts);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(res =>
            dispatch({type: ADD_CHOSEN_POST, payload: res})
        )
    }, [id])
    return (
        <ul>
            {posts.map(item=><li key={item.id}>id:{item.userId}{item.title} </li>)}
        </ul>
    );
}
