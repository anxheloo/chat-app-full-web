import io from "socket.io-client";

let socket = null;

let connectSocket = (user_id) => {
  io("http://localhost:5000", {
    query: { user_id },
  });
};

export { socket, connectSocket };
