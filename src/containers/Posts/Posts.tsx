import { useEffect, useState } from 'react';
import { NamedPost } from '../../types';
import { getPosts } from '../../lib/api';
import Typography from '@mui/material/Typography';
import PostCard from '../../components/PostCard/PostCard';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState<NamedPost[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadPosts();
  }, []);

  return (
    <>
      {!posts ? (
        <Typography>There are no posts here yet.</Typography>
      ) : (
        <Stack spacing={1}>
          {posts.map((x) => (
            <PostCard
              key={x.name}
              post={x.post}
              readMore={() => {
                navigate(`/posts/${x.name}`);
              }}
            />
          ))}
        </Stack>
      )}
    </>
  );
};

export default Posts;
