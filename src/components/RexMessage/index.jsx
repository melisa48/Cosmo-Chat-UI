import React from 'react';
import { Grid, Typography } from '@mui/material';
import ChatStyles from './chat';
import rexAvatar from '../assets/rex-avatar.png';

const RexMessage = ({ rexMessage }) => {
     return (
       <Grid container {...ChatStyles.rexMessageContainer}>
         <Grid item {...ChatStyles.rexMessageAvatarContainer}>
           <img src={rexAvatar} alt="Rex" {...ChatStyles.rexMessageAvatar} />
         </Grid>
         <Grid item {...ChatStyles.rexMessageTextContainer}>
           <Typography {...ChatStyles.rexMessageText}>{rexMessage}</Typography>
         </Grid>
       </Grid>
     );
   };

export default RexMessage;