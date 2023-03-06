const { io } = require("../server");

io.on("connection", (cliente) => {
    console.log("Usuario conectado");

    cliente.emit("enviarMensaje", {
        usuario: "Administrador",
        mensaje: "Bienvenido a esta aplicación"
    });

    cliente.on("disconnect", () => {
        console.log("Usuario desconectado");
    });

    // Escuchar el cliente
    cliente.on("enviarMensaje", (data, callback) => {
        console.log(data);

        cliente.broadcast.emit("enviarMensaje", data);

        // if (data.usuario) {

        //     callback({
        //         resp: "TODO SALIO BIEN!"
        //     });
        // }
        // else {
        //     callback({
        //         resp: "TODO SALIO MAL!!!!!"
        //     });
        // }
    });
});