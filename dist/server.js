"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./util/database");
const inventory_controller_1 = require("./controllers/inventory.controller");
class Server {
    constructor() {
        this.app = express_1.default();
        this.database = new database_1.Database();
        this.database.createConnection();
        this.middler();
        this.routes();
    }
    enabledCors() {
        const options = {
            methods: 'GET, OPTIONS, PUT, POST, DELETE',
            origin: '*'
        };
        this.app.use(cors_1.default(options));
    }
    middler() {
        this.enabledCors();
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((req, resp) => {
            resp.send({ message: 'FOI' });
        });
        this.app.route('/api/v1/inventory').get(inventory_controller_1.InventoryController.findAll);
        this.app.route('/api/v1/inventory/:id').get(inventory_controller_1.InventoryController.findById);
        this.app.route('/api/v1/inventory').post(inventory_controller_1.InventoryController.create);
        this.app.route('/api/v1/inventory/:id').put(inventory_controller_1.InventoryController.update);
        this.app.route('/api/v1/inventory/:id').delete(inventory_controller_1.InventoryController.delete);
    }
}
exports.Server = Server;
