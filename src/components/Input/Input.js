import React from "react";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form action="" className="form">
    <input
      className="input"
      type="text"
      value={message}
      placeholder="Type a message.."
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />

    <button className="sendButton" onClick={(e) => sendMessage(e)}>
      Send
    </button>
  </form>
);

export default Input;
