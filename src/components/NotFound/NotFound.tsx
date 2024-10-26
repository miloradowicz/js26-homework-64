import Grid from '@mui/material/Grid2';
import notFound from '../../assets/images/page-not-found.svg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const NotFound: FC<Props> = ({ title, description }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={2}>
        <Box component='img' src={notFound} alt='404' sx={{ width: '100%' }} />
      </Grid>
      <Grid size={10}>
        <Typography variant='h2'>{title}</Typography>
        <Typography component='div'>{description}</Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
