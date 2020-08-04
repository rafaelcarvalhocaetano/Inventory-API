"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var inventory_controller_1 = require("./controllers/inventory.controller");
var server = new server_1.Server();
server.initialize([inventory_controller_1.IInventory]).then(function () { return console.log(' SERVER INITIALIZE'); });
