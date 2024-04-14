import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 className="heading">
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          📝🔥
        </span>
      </h1>
      <p className="description">
        Welcome to our real-time chat application! Connect with friends, family,
        or colleagues instantly and start chatting. See who's online and join
        the conversation.
      </p>
    </div>
    {users && (
      <div>
        <h2 className="onlineUsersHeading">People currently chatting:</h2>
        <hr className="hrwidth" />
        <div className="activeContainer">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img alt="Online Icon" src={onlineIcon} />
              <p className="userName">{name}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
