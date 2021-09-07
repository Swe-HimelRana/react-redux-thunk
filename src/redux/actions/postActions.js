import { FETCH_POSTS, CREATE_POST } from "./types";

export const fetchPosts = () => dispatch => {
    console.log("Called")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
}