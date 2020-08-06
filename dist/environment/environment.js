"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    DATABASE: process.env.MONGODB || 'mongodb://localhost:27017/inventory',
    PORT: process.env.PORT || 3000
};
