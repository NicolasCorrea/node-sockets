var socket = io();
      socket.on('connect',function () {
        console.log("Conectado al servidor");
      })
      socket.on('disconnect', function(){
        console.log("Perdimos conexion con el servidor");
      })
      // emit=realizar peticion(enviar mensaje al servidor)
      socket.emit('enviarMensaje',{
        usuario:'nicolas',
        mensaje:'hola socket'
      },function (resp) {
        console.log('respuesta', resp);
      })
      socket.on('enviarMensaje',function(message){
        console.log(message);
      })