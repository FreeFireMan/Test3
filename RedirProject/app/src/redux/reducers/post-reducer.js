import {ADD_CHOSEN_POST,ADD_NEW_POST} from "../action-types";
import {act} from "@testing-library/react";

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHOSEN_POST : {
            return {...state, posts: action.payload};
        }
        case ADD_NEW_POST : {
            console.log(action.payload,'act paylaod');
            state.posts.push(action.payload)
            return {...state}
        }

        default : {
            return state;
        }
    }
}
