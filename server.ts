import pogo, { Server } from "https://deno.land/x/pogo@v0.5.1/main.ts";
import { RoutesList } from "https://deno.land/x/pogo@v0.5.1/lib/router.ts";
import { SampleController } from "./src/application/sample/sample.controller.ts";

const server: Server = pogo.server({ port: 3000 });

const sampleController = new SampleController();

const routeList: RoutesList = [
  { method: "GET", path: "/hi", handler: () => "Hello!" },
  { method: "GET", path: "/bye", handler: () => "Goodbye!" },
  {
    method: "GET",
    path: "/cont/{pathParamTest}",
    handler: sampleController.run,
  },
];

server.route([routeList]);
server.start();
