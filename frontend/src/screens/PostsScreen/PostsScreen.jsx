import React, { useContext } from 'react';
import PostsContext from '../../contexts/postsContext';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PostCard from '../../components/Post-components/Post-card/PostCard.jsx';
import './PostsScreen.css';
import { deletePost } from '../../core/services/postsServices';

const PostsScreen = () => {

    const navigate = useNavigate();

    const { posts } = useContext(PostsContext);


    const PrintPosts = () => {
        return posts.map(({_id, title, description, picture, author}) => <PostCard key={_id} id={_id} title={title} description={description} picture={picture} author={author} />)
    }

   return(
       <div className="posts-screen">
             <div className="posts-container">
                 { PrintPosts() } 
             </div> 
             <button onClick={() => { console.log(posts); }}>Show posts!</button>
       </div>
   );
}

export default PostsScreen;