import { useState } from "react";
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { Configuration, OpenAIApi } from "openai";

const API_KEY = "Your API key";

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am Rex",
      sender: "ChatGPT",
      direction: "outgoing"
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    };

    const newMessages = [...messages, newMessage];

    // update our messages state
    setMessages(newMessages);

    // set a typing indicator (Rex is typing)
    setTyping(true);
    //process message to ChatGPT (send it over and see the response)
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const systemMessage = {
      role: "system",
      content: "You are Rex. You are a career advice assistant. You give advice to Andrew about his career."
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages //[message1, message2, message3]
      ]
    }

    try {
      const response = await openai.createChatCompletion(apiRequestBody);
      const assistantMessage = {
        message: response.data.choices[0].message.content,
        sender: "ChatGPT",
        direction: "incoming"
      };
      setMessages([...messages, assistantMessage]);
      setTyping(false);
    } catch (error) {
      console.error("Error processing message to ChatGPT:", error);
      setTyping(false);
    }
  }

  return (
    <div className="App">
      <div className="chat-container" style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList className="message-list" scrollBehavior='smooth' typingIndicator={typing ? <TypingIndicator content="Rex is typing" /> : null}>
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput className="message-input" placeholder="Type message here..." onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;