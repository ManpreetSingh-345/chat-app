interface Socket {
  on(event: "disconnect", listener: () => void): void;
  on(event: "send-message", listener: (msg: unknown) => void): void;
}

export const handleSocketConnection = (socket: Socket): void => {
  console.log("Client connected successfully");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  socket.on("send-message", (msg: unknown): void => {
    console.log("Message: ", msg);
  });
};
