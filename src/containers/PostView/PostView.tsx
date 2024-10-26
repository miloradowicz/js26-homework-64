import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { getPost, deletePost as api_deletePost } from '../../lib/api';
import NotFound from '../../components/NotFound/NotFound';

const PostView = () => {
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState<boolean>(false);
  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!name) {
          throw new Error('Post not found.');
        }

        const data = await getPost(name);

        if (data) {
          setPost(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadPost();
  }, [name]);

  const editPost = async () => {
    navigate(`/posts/${name}/edit`);
  };

  const deletePost = async () => {
    try {
      if (!name) {
        throw new Error('Post not found.');
      }

      await api_deletePost(name);

      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {error ? (
        <NotFound title='Пост не найден' description='Пост не найден' />
      ) : (
        post && (
          <Card variant='outlined' sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Created on:<Box>{post.createdOn}</Box>
              </Typography>
              <Typography variant='h5' component='div'>
                {post.title}
              </Typography>
              <Typography component='div'>{post.body}</Typography>
            </CardContent>
            <CardActions>
              <Button size='small' onClick={editPost}>
                Edit
              </Button>
              <Button size='small' onClick={deletePost}>
                Delete
              </Button>
            </CardActions>
          </Card>
        )
      )}
    </>
  );
};

export default PostView;
