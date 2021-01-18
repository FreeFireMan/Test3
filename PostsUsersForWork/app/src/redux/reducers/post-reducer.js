import {ADD_POSTS} from "../action-creators";

const initialState = {
    posts:[]
};


export const postsReducer = (state=initialState.users,action) => {
    switch (action.type){
        case ADD_POSTS :{
            state.push(action.payload)
            return [...state]
        }
        default :{
            return  state;
        }
    }
}