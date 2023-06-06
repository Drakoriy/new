import React from "react";

function ChatWindow(props) {
  const messagesList = props.messages.map((message, index) => {
    const senderClass = message.sender === "bot" ? "bot-message" : "user-message";
    return (
      <li key={index} className={senderClass}>
        {message.text}
      </li>
    );
  });

  return (
    <div className="chat-window">
      <ul>{messagesList}</ul>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.currentMessage} onChange={props.handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatWindow;