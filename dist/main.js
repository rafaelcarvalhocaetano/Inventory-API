"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const environment_1 = require("./environment/environment");
const server = new server_1.Server();
server.app.listen(environment_1.environment.PORT, () => console.log(' API - INVENTORY '));
