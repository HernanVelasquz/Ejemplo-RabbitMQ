const { connection } = require('../connection/connectionRabbit');
const { creationQueue } = require('../connection/Queue');
const { sendMessage } = require('./sendMessage');


const connect = async () => {
    const queue = 'employees';
    const newQueue = 'clientes';

    const channel = await connection(queue);
    await creationQueue(channel, queue);
    sendMessage(queue, channel);


    await creationQueue(channel, newQueue);
    sendMessage(newQueue, channel)

}

connect();