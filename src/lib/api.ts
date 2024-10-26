import axios from 'axios';
import { NamedPost, Post, PostContainer, PostName } from '../types';

const baseUrl = 'https://js26-hw-64-blog-eb81a-default-rtdb.europe-west1.firebasedatabase.app/';

const headers = { 'Content-Type': 'application/json' };

export const getPosts = async () => {
  const endpoint = 'posts.json';

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.get<PostContainer | null>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  const _data: NamedPost[] = [];

  if (data) {
    for (const name in data) {
      _data.push({ name, post: data[name] });
    }
  }

  return _data;
};

export const getPost = async (name: string) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.get<Post | null>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return data;
};

export const createPost = async (post: Post) => {
  const endpoint = 'posts.json';

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.post<NamedPost>(url.href, post, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return data;
};

export const updatePost = async (name: string, post: Post) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.put<PostName>(url.href, post, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return data;
};

export const deletePost = async (name: string) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.delete<null>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  return data;
};
