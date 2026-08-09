import { useState } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:3000");
  const [message, setMessage] = useState("");

  socket.on("connect", (socket) => {
    console.log("Doing something upon connection");
  });

  const handleClick = () => {
    socket.emit("send-message", message);
  };

  return (
    <>
      <input
        name="message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick} className="bg-green-300">
        Send message
      </button>
    </>
  );
}

export default App;
