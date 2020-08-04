"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInventory = void 0;
var router_1 = require("../routers/router");
var inventory_schemas_1 = require("../schemas/inventory.schemas");
var InventoryController = /** @class */ (function (_super) {
    __extends(InventoryController, _super);
    function InventoryController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryController.prototype.application = function (http) {
        var _this = this;
        http.get('/inventory', function (req, resp, next) {
            inventory_schemas_1.inventoryRepository.find().then(function (x) {
                if (x) {
                    resp.json(x);
                }
                else {
                    resp.send(404);
                }
            });
        });
        http.get('/inventory/:id', function (req, resp, next) {
            inventory_schemas_1.inventoryRepository.findById(req.params.id).then(function (x) { return _this.callbackRouter; });
        });
        http.post('/inventory', function (req, resp, next) {
            var item = new inventory_schemas_1.inventoryRepository(req.body);
            item.save().then(function (x) { return _this.callbackRouter; });
        });
        http.put('/inventory/:id', function (req, resp, next) {
            var options = { overwrite: true };
            inventory_schemas_1.inventoryRepository.update({ _id: req.params.id }, req.body, options).exec().then(function (x) { return _this.callbackRouter; }).then(function (x) {
                resp.json(x);
                return next();
            });
        });
        http.del('/inventory/:id', function (req, resp, next) {
            inventory_schemas_1.inventoryRepository.remove({ _id: req.params.id }).exec().then(function (x) { return _this.callbackRouter; });
        });
    };
    return InventoryController;
}(router_1.Router));
exports.IInventory = new InventoryController();
