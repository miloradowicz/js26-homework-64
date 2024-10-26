import axios from 'axios';
import { ApiPost, NamedPost, Post, PostContainer, PostName } from '../types';
import { DateTime } from 'luxon';

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
      _data.push({ name, post: { ...data[name], createdOn: DateTime.fromISO(data[name].createdOn) } });
    }
  }

  return _data;
};

export const getPost = async (name: string) => {
  const endpoint = `posts/${name}.json`;

  const url = new URL(endpoint, baseUrl);
  const { data, status } = await axios.get<ApiPost | null>(url.href, { headers });

  if (status < 200 || status >= 300) {
    throw new Error(`${status}`);
  }

  let _data: Post | null = null;
  if (data) {
    _data = { ...data, createdOn: DateTime.fromISO(data.createdOn) };
  }

  return _data;
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
