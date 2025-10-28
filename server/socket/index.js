
const socketHandler = (io) => {
    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);
    });
};

module.exports = socketHandler;