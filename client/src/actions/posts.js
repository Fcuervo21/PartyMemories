import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators => Functions that return actions
export const getPosts = () => async (dispatch) => {


    try {
        // Fetch all the data form the api
        // Data represents the posts
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });

        // // Redux thunk allow us specify an additional arrow function
        //  const action = { type: 'FETCH_ALL', payload: [] }
        // //Action is an object that has its type and payload

        // dispatch(action)
    } catch (error) {
        console.log(error.message);
    }
    
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};