# Node and RabbitMQ

## Start RabbitMQ on docker
docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 -p 5672: 5672 rabbitmq:3-management

## Testing

run receive.js

```
node receive.js
```

after run send command

```
node send.js
```



