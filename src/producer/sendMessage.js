const msgs = require('../messages/messages');

const sendMessage = async (queue, channel) => {
    for(let msg in msgs){
        await channel.sendToQueue(queue, Buffer.from(JSON.stringify(msgs[msg])));
        console.log(`Message sent to queue: ${ queue }`);
    }
}

module.exports = {
    sendMessage
}