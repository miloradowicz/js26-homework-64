import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { createPost, getPost, updatePost } from '../../lib/api';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';

interface FormData {
  title: string;
  body: string;
}

const PostEdit = () => {
  const [data, setData] = useState<FormData>({ title: '', body: '' });
  const [error, setError] = useState<boolean>(false);
  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (name) {
          const data = await getPost(name);

          if (data) {
            setData({ title: data.title, body: data.body });
          } else {
            setError(true);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadPost();
  }, [name]);

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      if (!error) {
        if (name) {
          await updatePost(name, { title: data.title, body: data.body, createdOn: new Date() });
        } else {
          await createPost({ title: data.title, body: data.body, createdOn: new Date() });
        }

        navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {error ? (
        <NotFound title='Пост не найден' description='Пост не найден' />
      ) : (
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel htmlFor='title'>Title</InputLabel>
                <Input id='title' name='title' aria-describedby='title-helper-text' value={data.title} onChange={onChange} />
                <FormHelperText id='title-helper-text'>Whatever grand things you have to say definitely need a title.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid size={12}>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  placeholder='Share your thought...'
                  multiline
                  rows={5}
                  id='body'
                  name='body'
                  aria-describedby='body-helper-text'
                  value={data.body}
                  onChange={onChange}
                />
                <FormHelperText id='body-helper-text'>Share your thoughts.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid size={4}>
              <Button type='submit'>Save</Button>
            </Grid>
          </Grid>
        </form>
      )}
    </>
  );
};

export default PostEdit;
