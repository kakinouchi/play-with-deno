import pogo, { Server } from "https://deno.land/x/pogo@v0.5.1/main.ts";

const server: Server = pogo.server({ port: 3000 });

server.route([
  { method: "GET", path: "/hi", handler: () => "Hello!" },
  { method: "GET", path: "/bye", handler: () => "Goodbye!" },
]);

server.start();
