import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import EndedChat from './EndedChat';
import api from '../api/sessions';

const ChatHistory = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get('/sessions');
        setSessions(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };
    fetchSessions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/sessions/${id}`);
      setSessions(sessions.filter((session) => session.id !== id));
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Grid container>
      {sessions.map((session) => (
        <EndedChat
          key={session.id}
          date={session.date}
          chats={session.chats}
          handleDelete={() => handleDelete(session.id)}
        />
      ))}
    </Grid>
  );
};

export default ChatHistory;