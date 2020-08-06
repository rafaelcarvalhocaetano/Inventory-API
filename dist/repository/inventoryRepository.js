"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const inventory_schemas_1 = require("../schemas/inventory.schemas");
exports.InventoryRepository = mongoose_1.default.model('items', inventory_schemas_1.InventorySchema);
