import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// A reducer is a function 
export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;//Action.payload is our actual post
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
};