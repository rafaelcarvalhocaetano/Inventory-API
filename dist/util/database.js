"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("../environment/environment");
class Database {
    constructor() {
        this.options = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true
        };
    }
    createConnection() {
        mongoose_1.default.connect(environment_1.environment.DATABASE, this.options);
    }
}
exports.Database = Database;
