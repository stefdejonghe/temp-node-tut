const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("request event");
//     res.end("Hello world");
//   });

// Using Event Emitter API
const server = http.createServer();

// Emits request event
// Subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
