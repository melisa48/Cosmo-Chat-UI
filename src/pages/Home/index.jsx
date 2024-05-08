import React from 'react';
import { Grid } from '@mui/material';
import ChatStyles from '../../styles/chat';
import ActivityStyles from '../../styles/activity';
import Chat from './Chat';
import Activity from './Activity';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Grid container {...ChatStyles.homeContainer}>
          <Chat />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container {...ActivityStyles.homeContainer}>
          <Activity />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;