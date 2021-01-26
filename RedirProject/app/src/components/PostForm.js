import React from 'react';
import '../styles/post-form.css';
import {useDispatch} from "react-redux";
import {ADD_NEW_POST} from "../redux/action-types";
import {useSelector} from "react-redux";

export default function PostForm() {
const posts = useSelector(store=>store.posts.posts)
    const myRef = React.createRef()
    const dispatch = useDispatch();
    console.log(posts);
    const SendNewPostHandler = (e) => {
        e.preventDefault();
        const userId = myRef.current.children[1].value;
        const id = myRef.current.children[3].value;
        const title = myRef.current.children[5].value;
        const body = myRef.current.children[7].value;
        console.log(body);
         dispatch({type:ADD_NEW_POST,payload:{userId,id,title,body}})
    }
    return (
        <div className="post-form-main-box">
            <form className='main-form-container' onClick={SendNewPostHandler}>

                <div className="input-group inp-width col-8" ref={myRef}>
                    <p>user Id :</p><input name="my" type="number" className="form-control" placeholder="" aria-label=""
                                           aria-describedby="basic-addon1"/>
                    <p>Id :</p><input type="number" className="form-control" placeholder="" aria-label=""
                                      aria-describedby="basic-addon1"/>
                    <p>Title :</p><input type="text" className="form-control" placeholder="" aria-label=""
                                         aria-describedby="basic-addon1"/>
                    <p>Body :</p><input type="text" className="form-control" placeholder="" aria-label=""
                                        aria-describedby="basic-addon1"/>
                    <input type="submit" name="" id=""/>

                </div>


            </form>


        </div>
    );
}
