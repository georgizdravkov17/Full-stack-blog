import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../../core/services/postsServices';

const SinglePost = () => {
  
    const { id } = useParams();

    const [postData, setPostData] = useState({});

    useEffect(() => {
        getPostById(id)
        .then(response => {
          setPostData(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    })

    return(
        <div className="post">
            <h1>{postData.title}</h1>
            <h1>{postData.description}</h1>
            <h1>{postData.author}</h1>
        </div>
    );
}

export default SinglePost