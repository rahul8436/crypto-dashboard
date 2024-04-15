import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Crypto Dashboard
        </Typography>
        {user ? (
          <Button color='inherit' onClick={logout}>
            Logout
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
