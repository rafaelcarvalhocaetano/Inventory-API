"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryController = void 0;
const inventory_service_1 = require("../services/inventory-service");
const http_status_1 = __importDefault(require("http-status"));
const response_1 = require("../util/response");
class IController {
    findAll(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield inventory_service_1.InventoryService.findAllInventory();
                response_1.Response.sendResponse(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `DEU RUIM ${e}`);
            }
        });
    }
    findById(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield inventory_service_1.InventoryService.findByIdInventory(req.params.id);
                response_1.Response.sendResponse(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `DEU RUIM ${e}`);
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield inventory_service_1.InventoryService.createInventory(req.body);
                response_1.Response.sendResponse(resp, http_status_1.default.OK, 'Item Cadastro com sucesso!!!!');
            }
            catch (e) {
                console.error.bind(console, `DEU RUIM ${e}`);
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield inventory_service_1.InventoryService.updateInventory(req.params.id, req.body);
                response_1.Response.sendResponse(resp, http_status_1.default.OK, data);
            }
            catch (e) {
                console.error.bind(console, `DEU RUIM ${e}`);
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield inventory_service_1.InventoryService.deleteByIdInventory(req.params.id);
                response_1.Response.sendResponse(resp, http_status_1.default.OK, 'Item deletado....');
            }
            catch (e) {
                console.error.bind(console, `DEU RUIM ${e}`);
            }
        });
    }
}
exports.InventoryController = new IController();
