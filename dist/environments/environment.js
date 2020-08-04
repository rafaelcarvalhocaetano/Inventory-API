"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmnent = void 0;
exports.environmnent = {
    DB: process.env.DATA_BASE || 'mongodb://localhost:27017/inventory',
    PORT: process.env.PORT || 3000
};
