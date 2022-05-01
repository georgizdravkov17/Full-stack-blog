import React, { useContext } from 'react';
import PostsContext from '../../../contexts/postsContext.js';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const PostCard = ({id, title, description, picture, author}) => {

    const navigate = useNavigate();

    const { onDeletePost } = useContext(PostsContext);

  return(
    <Card style={{ width: '18rem' }} key={id}>
    <Card.Img variant="top" src={picture} />
    <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          {id}
        </Card.Text>
        <Button variant="primary" onClick={() => { navigate(`/posts/${id}`) }}>See Post</Button>
        <Button variant="primary" onClick={() => { onDeletePost(id) }}>Delete Post</Button>
    </Card.Body>
</Card>
  );
}

export default PostCard;