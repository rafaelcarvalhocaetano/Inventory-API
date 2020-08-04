"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
class Router {
    callbackRouter(resp, next) {
        return (document) => {
            if (document) {
                resp.json(document);
            }
            else {
                resp.send(404);
            }
            return next();
        };
    }
}
exports.Router = Router;
