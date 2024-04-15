import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
let socket;

const Chat = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = process.env.server || "http://localhost:5000";
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const nameFromUrl = searchParams.get("name") || "";
    const roomFromUrl = searchParams.get("room") || "";

    socket = io(ENDPOINT, { transports: ["websocket"] });

    setName(nameFromUrl);
    setRoom(roomFromUrl);

    socket.emit("join", { name: nameFromUrl, room: roomFromUrl }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  // function for sending messages

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
