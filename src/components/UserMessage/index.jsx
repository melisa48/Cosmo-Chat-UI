import React from 'react';
import { Grid, Typography } from '@mui/material';
import ChatStyles from '../styles/chat';

const UserMessage = ({ userMessage }) => {
  return (
    <Grid container {...ChatStyles.userMessageContainer}>
      <Grid item {...ChatStyles.userMessageTextContainer}>
        <Typography {...ChatStyles.userMessageText}>{userMessage}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserMessage;