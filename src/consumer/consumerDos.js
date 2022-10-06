const { connection } = require('../connection/connectionRabbit');
const { creationQueue } = require('../connection/Queue');
const connectionConsumerDos = async () => {

    const queue = 'clientes';
    const enterprise = 'CECAR';
    const channel = await connection();
    await creationQueue(channel, queue);

    try {

        console.log(`Waiting for message from ${enterprise}`);
        channel.consume(queue, messages => {
            let employees = JSON.parse(messages.content.toString());
            console.log(`Recived emproyee ${employees.name}`);
            console.log(employees);
            // channel.ack(messages);
            
            if (employees.enterprise == enterprise) {
                channel.ack(messages); 
                console.log('Delete message from queue...\n');
            }
            console.log(`That message is not me I'll not delete it..`);
        });
    } catch (error) {
        console.log(`Error -> ${error}`);
    }
}

connectionConsumerDos();