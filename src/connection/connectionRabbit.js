const amqp = require('amqplib');
const rabbitSetting = require('../config/rabbitSetting');

const connection = async (queue) => {
    try {
        const conectRabbit = await amqp.connect(rabbitSetting);
        console.log('Connection Created...');

        const channel = await conectRabbit.createChannel();
        console.log('Channel Created');

        return channel;
    } catch (error) {
        console.log(`Error -> ${error}`);
    }
}

module.exports = {
    connection
}