"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInventory = void 0;
const router_1 = require("../routers/router");
const inventory_schemas_1 = require("../schemas/inventory.schemas");
class InventoryController extends router_1.Router {
    application(http) {
        http.get('/', (req, resp, next) => {
            inventory_schemas_1.inventoryRepository.find().then(x => {
                if (x) {
                    resp.json(x);
                }
                else {
                    resp.send(404);
                }
            });
        });
        http.get('/:id', (req, resp, next) => {
            inventory_schemas_1.inventoryRepository.findById(req.params.id).then(x => this.callbackRouter);
        });
        http.post('/', (req, resp, next) => {
            const item = new inventory_schemas_1.inventoryRepository(req.body);
            item.save().then(x => this.callbackRouter);
        });
        http.put('/:id', (req, resp, next) => {
            const options = { overwrite: true };
            inventory_schemas_1.inventoryRepository.update({ _id: req.params.id }, req.body, options).exec().then((x) => this.callbackRouter).then(x => {
                resp.json(x);
                return next();
            });
        });
        http.del('/:id', (req, resp, next) => {
            inventory_schemas_1.inventoryRepository.remove({ _id: req.params.id }).exec().then(x => this.callbackRouter);
        });
    }
}
exports.IInventory = new InventoryController();
