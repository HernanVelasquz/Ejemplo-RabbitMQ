const { connection } = require('../connection/connectionRabbit');
const { creationQueue } = require('../connection/Queue');
const { sendMessage } = require('./sendMessage');

/**
 * Metodo encargado de ser el publicador de la información
 */
const connect = async () => {
    const queue = 'employees';
    const newQueue = 'clientes';

    const channel = await connection();
    await creationQueue(channel, queue);
    sendMessage(queue, channel);


    await creationQueue(channel, newQueue);
    sendMessage(newQueue, channel)

}

connect();