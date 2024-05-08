import React, { useEffect, useState } from "react";
import api from "../../api/sessions";
import { Grid, CircularProgress, Typography, Link } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import ActivityStyles from "../../styles/activity";
import AllStyles from "../../styles/home";
import ChatHistory from "../../components/ChatHistory";

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [sessionDates, setSessionDates] = useState([]);
  const [sessionChatLengths, setSessionChatLengths] = useState([]);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        setSessions(response.data.reverse());
        setSessionDates([
          ...Array.from(response.data, (data) => data.date.split(",")[0]),
        ]);
        setSessionChatLengths([
          ...Array.from(response.data, (data) => data.chats.length),
        ]);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
    };
    fetchSessions();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/sessions/${id}`);
      setSessions(sessions.filter((session) => session.id !== id));
    } catch (err) {
      console.error('Error deleting session:', err);
    }
  };

  return (
    <Grid container {...ActivityStyles.activityBody}>
      <Grid container item {...ActivityStyles.titleOutline}>
        <Typography {...ActivityStyles.title}>Your Statistics</Typography>
      </Grid>
      <Grid container item>
        <Typography {...ActivityStyles.description}>
          Graph of the conversation you had with ReX this year.
        </Typography>
      </Grid>
      <Grid container item>
        {loading ? (
          <CircularProgress />
        ) : (
          <BarChart
            xAxis={[{ scaleType: "band", data: [...sessionDates] }]}
            series={[{ data: sessionChatLengths }]}
            width={500}
            height={300}
          />
        )}
      </Grid>
      <Grid container item {...AllStyles.endedChatsTitle}>
        <Grid {...AllStyles.endedChats}>Details Chat Activity</Grid>
        <Grid>
          <Link {...AllStyles.seeAllLink} href="/activityDetails">
            See All
          </Link>
        </Grid>
      </Grid>
      <Grid>
        {loading ? (
          <CircularProgress />
        ) : (
          sessions.map((session, i) =>
            session.isSessionEnded && i < 4 ? (
              <ChatHistory
                key={session.id}
                id={session.id}
                date={session.date}
                lasttext={
                  session.chats.length
                    ? session.chats[session.chats.length - 1].Rex[
                        session.chats[session.chats.length - 1].Rex.length - 1
                      ]
                    : ""
                }
                sessionEnded={session.isSessionEnded}
                handleDelete={() => handleDelete(session.id)}
                isActivity={true}
              />
            ) : null
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Activity;