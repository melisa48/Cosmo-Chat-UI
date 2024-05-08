import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import ChatStyles from '../../styles/chat';

const EndedChat = ({ date, chats, handleDelete }) => {
  return (
    <Grid container {...ChatStyles.endedChatContainer}>
      <Grid item {...ChatStyles.endedChatDateContainer}>
        <Typography {...ChatStyles.endedChatDate}>{date}</Typography>
      </Grid>
      <Grid item {...ChatStyles.endedChatMessagesContainer}>
        {chats.map((chat, index) => (
          <Grid key={index} container {...ChatStyles.endedChatMessageContainer}>
            {Object.keys(chat).map((key, index) => (
              <Grid key={index} item {...ChatStyles.endedChatMessage}>
                <Typography
                  {...(key === 'user'
                    ? ChatStyles.endedChatUserMessage
                    : ChatStyles.endedChatRexMessage)}
                >
                  {chat[key]}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid item {...ChatStyles.endedChatButtonContainer}>
        <Button onClick={handleDelete} {...ChatStyles.endedChatButton}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default EndedChat;