import React, { useContext } from 'react';
import PostsContext from '../../contexts/postsContext.js';
import PostCard from '../../components/Post-components/Post-card/PostCard.jsx';
import './HomeScreen.css';

const HomeScreen = () => {

    const { posts } = useContext(PostsContext);

    const PrintNewestPosts = () => {
        const newestTenPosts = posts.slice(-2);
        return newestTenPosts.map(({_id, title, description, picture ,author}) => <PostCard key={_id} id={_id} title={title} description={description} picture={picture} author={author} />)
    }

    return(
        <div className="home-screen">
            <h1>This is Home Screen!</h1>
            <div className="posts-container">
                  { PrintNewestPosts() } 
            </div>
        </div>
    );
}

export default HomeScreen;