import {CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

export const showLoader = () => ({
    type: SHOW_LOADER,
});

export const hideLoader = () => ({
    type: HIDE_LOADER,
});

export const showAlert = (text) => (dispatch) => {
    dispatch({type: SHOW_ALERT, payload: text});
    setTimeout(() => {
        dispatch(hideAlert())
    }, 3000);
};

export const hideAlert = () => ({
    type: HIDE_ALERT,
});

// export const fetchPosts = () => async (dispatch) => {
//     try {
//         dispatch(showLoader());
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//         const json = await response.json();
//         dispatch({type: FETCH_POSTS, payload: json});
//     } catch (e) {
//         dispatch(showAlert('Что-то пошло не так'));
//     } finally {
//         dispatch(hideLoader());
//     }
//
// };

//saga
export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
};
