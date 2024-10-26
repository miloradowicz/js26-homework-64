import { FC, memo } from 'react';
import { Post } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface Props {
  post: Post;
  readMore: () => void;
}

const PostCard: FC<Props> = ({ post, readMore }) => {
  return (
    <Card variant='outlined' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Created on:<Box>{post.createdOn}</Box>
        </Typography>
        <Typography variant='h5' component='div'>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={readMore}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default memo(PostCard);
