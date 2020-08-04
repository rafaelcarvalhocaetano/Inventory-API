"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const inventory_controller_1 = require("./controllers/inventory.controller");
const server = new server_1.Server();
server.initialize([inventory_controller_1.IInventory]).then(() => console.log(' SERVER INITIALIZE'));
