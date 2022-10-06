const msgs = require('../messages/messages');
/**
 * Funcion encargado derealizar envios de mensaje a las colas
 * @param {*} queue para redirrecionar el mensaje a enviar
 * @param {*} channel de conexion para enviar la cola de conexion
 */

const sendMessage = async (queue, channel) => {
    for(let msg in msgs){
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
        console.log(`Message sent to queue: ${ queue }`);
    }
}

module.exports = {
    sendMessage
}