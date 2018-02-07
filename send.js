const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    if (err) {
        console.error(err);
        return;
    }
    conn.createChannel((err, ch) => {
        const queue = 'hello';
        const message = 'Hello World';

        ch.assertQueue(queue, { durable: false });
        ch.sendToQueue(queue, new Buffer(message));
        
        console.log(` [x] Sent '${message}'`);
    });
    setTimeout(() => {
        conn.close();
        process.exit(0)
    }, 500);
});