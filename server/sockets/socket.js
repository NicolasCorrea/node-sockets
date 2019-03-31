const { io } = require('../server');
io.on("connection", client => {
  console.log("Usuario conectado");
  client.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
  // escuchar el clientes
  client.on("enviarMensaje", (data, callback) => {
    console.log(data);
    // if (message.usuario) {
    //   callback({ resp: "all fine" });
    // } else {
    //   callback({ resp: "everything is wrong" });
    // }
    client.broadcast.emit("enviarMensaje", data);
  });
});
