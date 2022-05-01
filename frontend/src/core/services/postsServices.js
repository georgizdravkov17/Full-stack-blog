import { apiUrl } from '../helpers/constants';
import axios from 'axios';

export const getAllPosts = () => {
    return axios.get(apiUrl);
}

export const getPostById = (id) => {
    return axios.get(`${apiUrl}/${id}`);
}

export const createPost = (postData) => {
    return axios.post(apiUrl, postData);
}

export const deletePost = (id) => {
    return axios.delete(`${apiUrl}/${id}`);
}