import { createContext, useState, useEffect } from 'react';
import { deletePost } from '../core/services/postsServices';
import { getAllPosts } from '../core/services/postsServices';

const PostsContext = createContext();

export const PostsProvider = ({children}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()
        .then((response) => {
            setPosts(response.data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);

    const onDeletePost = (id) => {
        deletePost(id)
        .then(_ => {
            alert("Succesfully deleted post!");
           setPosts(posts.filter(post => post.id !== id)); 
        })
        .catch(err => {
            console.log(err);
        })
    }


    return(
        <PostsContext.Provider value={{posts, setPosts, onDeletePost}}>{children}</PostsContext.Provider>
    );
}

export default PostsContext;