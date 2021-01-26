import {ADD_USERS} from "../action-types";

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS : {
            return {...state, users: action.payload};
        }

        default : {
            return state;
        }
    }
}
