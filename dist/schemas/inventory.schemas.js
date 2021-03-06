"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.InventorySchema = new mongoose_1.default.Schema({
    qr_code: {
        type: String,
        unique: true
    },
    item_value: {
        type: String,
    },
    description: {
        type: String
    },
    item_type: {
        type: String
    },
    item_url: {
        type: String
    }
});
