import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  console.debug('Navbar rendered');

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>
        <Stack direction='row' spacing={2} component='nav'>
          <Button color='inherit' component={NavLink} to='/'>
            Home
          </Button>
          <Button color='inherit' component={NavLink} to='/new-post'>
            Add
          </Button>
          <Button color='inherit' component={NavLink} to='/about'>
            About
          </Button>
          <Button color='inherit' component={NavLink} to='/contacts'>
            Contacts
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navbar);
