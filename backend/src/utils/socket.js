export const handleSocketConnection = (socket) => {
  console.log("Client connected successfully");
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
  socket.on("send-message", (msg) => {
    console.log("Message: ", msg);
  });
};
