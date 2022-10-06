const creationQueue =  (channel, queue ) => {
    return channel.assertQueue(queue);
}

module.exports = {
    creationQueue
}