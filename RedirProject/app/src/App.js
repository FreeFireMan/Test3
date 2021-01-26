import React,{useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import UsersList from "./components/UsersList";
import {useHistory} from 'react-router-dom';
import Post from "./components/Post";
import axios from "axios";


export default function App() {
    const history = useHistory();
    // useEffect(async ()=>{
    //    const data = await axios.post('https://jsonplaceholder.typicode.com/posts');
    //     console.log(data);
    // },[])
    const onRedirectHandle = () => {
        history.push('/:users')
    }
    return (<div>
            <Route path='/' exact>
                <button onClick={onRedirectHandle}>Redirect to userList</button>
            </Route>

            <Switch>
                <Route path={'/:users'} component={UsersList}/>
                <Route exact path={'/post'} component={Post}/>


            </Switch>
        </div>
    );
}
