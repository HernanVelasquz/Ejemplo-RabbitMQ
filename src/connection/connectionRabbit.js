const amqp = require('amqplib');
const rabbitSetting = require('../config/rabbitSetting');

/**
 * Funcion encargada de crear la conexcion a rabbitmq 
 * @returns canal de conexion creado
 */
const connection = async () => {
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