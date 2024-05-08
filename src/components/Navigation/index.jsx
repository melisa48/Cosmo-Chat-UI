import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navigation = () => {
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ReX App
        </Typography>
        <Button
          color={location.pathname === '/' ? 'inherit' : 'secondary'}
          component={Link}
          to="/"
        >
          Chat
        </Button>
        <Button
          color={location.pathname === '/history' ? 'inherit' : 'secondary'}
          component={Link}
          to="/history"
        >
          Chat History
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;