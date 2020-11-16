import axios from 'axios';
import url from '../../point.js'

export const fetchPosts = () => axios.get(`${url}/list`);
export const createPost = (newPost) => axios.post(`${url}/add`, newPost);
export const deletePost = (id) => axios.delete(`${url}/delete/${id}`);