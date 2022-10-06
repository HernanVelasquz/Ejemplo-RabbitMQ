/**
 * Funcion encargada de hacer la creacion de las colas
 * @param {*} channel canal de conexion de rabbit
 * @param {*} queue nombre a crear la connection
 * @returns la cola creada.
 */
const creationQueue =  (channel, queue ) => {
    return channel.assertQueue(queue);
}

module.exports = {
    creationQueue
}