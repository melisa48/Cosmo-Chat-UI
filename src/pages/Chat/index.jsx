import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Images from "../../constant/images";
import ChatStyles from "../../styles/chat";
import RexMessage from "../../components/RexMessage";
import api from "../../api/sessions";
import { Configuration, OpenAIApi } from "openai";
import { useParams } from "react-router-dom";
import UserMessage from "../../components/UserMessage";
import useMediaQuery from "@mui/material/useMediaQuery";

const Chat = () => {
  const { id } = useParams();
  const [userPrompt, setUserPrompt] = useState("");
  const [rexReply, setRexReply] = useState("");
  const [sessions, setSessions] = useState([]);
  const [thisSession, setThisSession] = useState({});
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const configuration = new Configuration({
    apiKey: API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const matches = useMediaQuery("(min-width: 600px)");
  let chatKeys = [];

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        setSessions(response.data);
        setThisSession(
          response.data.find(
            (session) => parseInt(session?.id, 10) === parseInt(id, 10)
          )
        );
        handleScroll();
        window.addEventListener("scroll", handleScroll);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    fetchSessions();
  }, [id]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    console.log("Scroll position:", scrollPosition);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedSession = {};

    setTimeout(async function () {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      const formattedDate = months[month] + " " + day + ", " + year;
      await callOpenAIAPI();
      thisSession.chats.push({ user: userPrompt, Rex: rexReply });
      updatedSession = {
        id: id,
        date: formattedDate,
        chats: thisSession.chats,
        isSessionEnded: thisSession.isSessionEnded,
      };
      for (let i = 0; i < updatedSession.chats.length; i++) {
        chatKeys.push(Object.keys(updatedSession.chats[i]));
      }

      try {
        const response = await api.put(`/sessions/${id}`, updatedSession);
        setSessions(
          sessions.map((session) =>
            session.id === id ? response.data : session
          )
        );
        setUserPrompt("");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }, 5000);
  };

  async function callOpenAIAPI() {
    const completion = await openai.createChatCompletion({
      messages: [
        {
          role: "system",
          content:
            "Your name is Rex. You are a career advice assistant. You give advice to Andrew about his career.",
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });

    setRexReply(completion.data.choices[0].message.content);
  }

  return (
    <Grid container style={{ display: matches ? "none" : "block" }}>
      <Grid style={{ padding: "40px 24px 24px 24px", position: "sticky" }}>
        <img src={Images.HomeRex} alt="Rex" style={{ width: "105px" }} />
      </Grid>
      <Grid {...ChatStyles.textDisplayBackground}>
        <Grid>
          {thisSession?.chats?.length
            ? thisSession?.chats?.map((chat, i) =>
                Object.keys(chat).map((key) =>
                  key === "Rex" ? (
                    <RexMessage rexMessage={chat.Rex} key={"rex" + i} />
                  ) : (
                    <UserMessage userMessage={chat.user} key={"user" + i} />
                  )
                )
              )
            : null}
        </Grid>
        {thisSession && !thisSession.isSessionEnded ? (
          <Grid>
            <Textarea
              {...ChatStyles.textArea}
              name="Soft"
              placeholder="Type a message to ReX ..."
              variant="soft"
              onChange={(e) => setUserPrompt(e.target.value)}
            />
            <Button onClick={handleSubmit}>Send</Button>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Chat;