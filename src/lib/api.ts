import axios from 'axios';
import { Post, PostContainer, PostName } from '../types';

const baseUrl = 'https://js26-hw-64-blog-eb81a-default-rtdb.europe-west1.firebasedatabase.app/';

const headers = { 'Content-Type': 'application/json' };

export const getPosts = async () => {
  const endpoint = 'posts.json';

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.get<PostContainer>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return await data;
};

export const getPost = async (name: string) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.get<PostContainer>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return await data;
};

export const createPost = async (post: Post) => {
  const endpoint = 'posts.json';

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.post<PostName>(url.href, post, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return await data;
};

export const updatePost = async (name: string, post: Post) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.put<Post>(url.href, post, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return await data;
};

export const deletePost = async (name: string) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.delete<null>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return await data;
};
