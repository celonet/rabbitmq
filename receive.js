var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
    if (err) {
        console.error(err);
        return;
    }
    conn.createChannel((err, ch) => {
        var queue = 'hello';

        ch.assertQueue(queue, { durable: false });

        console.log(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);

        ch.consume(queue, msg => {
            console.log(` [x] Received ${msg.content}`);
        }, {noAck: true });
    });
});