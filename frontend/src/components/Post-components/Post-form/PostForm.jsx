import { Formik, Form ,Field, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import { postSchema } from '../../../validations/postValidation.js';
import { createPost } from '../../../core/services/postsServices.js';
import './PostForm.css';

const initialValues = {
  title: "",
  description: "",
  author: ""
}

const onSubmit = (values) => {
    createPost(values)
    .then((response) => {
       alert("Succesfully created post!");
    })
    .catch(err => {
        console.log(err);
    })
}

const PostForm = () => {
  return(
      <div className="form-container">
          <Formik
           initialValues={initialValues}
           validationSchema={postSchema}
           onSubmit={onSubmit}
          >
              <Form className="form">
                  <div className="form-control">
                      <label htmlFor="title">Title: </label>
                      <Field type="text" id="title" name="title" required/>
                      <ErrorMessage name="title"/>
                  </div>
                  <div className="form-control">
                      <label htmlFor="description">Description: </label>
                      <Field type="text" id="description" name="description" required/>
                       <ErrorMessage name="description"/>
                  </div>
                  <div className="form-control">
                      <label htmlFor="picture">Picture: </label>
                      <Field type="text" id="picture" name="picture"/>
                       <ErrorMessage name="picture"/>
                  </div>
                  <div className="form-control">
                      <label htmlFor="author">Author: </label>
                      <Field type="text" id="author" name="author" required/>
                      <ErrorMessage name="author"/>
                  </div>
                  <Button type="submit" variant="primary">Add Post</Button>
              </Form>
          </Formik>
      </div>
  );
}

export default PostForm;