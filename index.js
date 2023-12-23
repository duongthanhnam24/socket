const { Server } = require("socket.io");
const io = new Server({ cors: "http://localhost:3000" });

io.on("connection", (socket) => {
    console.log("new connection", socket.id);
    socket.on("data", (data) => {
        console.log(data);
        io.emit("order", data);
    });
});
io.listen(5000);
