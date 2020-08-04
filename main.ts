import { Server } from "./server/server";
import { IInventory } from "./controllers/inventory.controller";

const server = new Server();
server.initialize([IInventory]).then(() => console.log(' SERVER INITIALIZE'));