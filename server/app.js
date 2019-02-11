import { SEND_MESSAGE, ADD_USER, ALL_USERS } from '../src/constants/ActionTypes'

const WebSocket = require('ws')
const wsServer = new WebSocket.Server({ port: 9090 });
const users = [];

const broadcast = (data, ws) => {
  wsServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wsServer.on("connection", ws => {
  let userIndex;

  ws.on("message", message => {
    const action = JSON.parse(message);
    switch (action.type) {
      case SEND_MESSAGE:
        broadcast(
          { ...action },
          ws
        );
        break;
      case ADD_USER:
        userIndex = users.length;
        users.push({ name: action.name, id: userIndex + 1 });
        broadcast(
            {
                type: action.type,
                users
            },
          ws
        );
        break;
    }
  });

  ws.on("close", () => {
    users.splice(userIndex, 1);
    broadcast(
      {
        type: ALL_USERS,
        users
      },
      ws
    );
  });
});
