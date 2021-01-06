import {ADD_ITEM,DELETE_ITEM} from "../action-creators";

const initialState = {
    todos:[]
};


export const reducer = (state=initialState.todos,action) => {
    switch (action.type){
        case ADD_ITEM :{
            state.push(action.payload)
          //  localStorage.setItem('todos',JSON.stringify(state))
            return [...state]
        }
        // case DELETE_ITEM :{
        //     const filtered = state.filter((value,index)  => index !== action.payload); тут мала бути кнопка щоб видаляти юзерів
        //     return [...filtered]
        // }
    }
}