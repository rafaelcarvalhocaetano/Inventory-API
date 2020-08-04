"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.prototype.callbackRouter = function (resp, next) {
        return function (document) {
            if (document) {
                resp.json(document);
            }
            else {
                resp.send(404);
            }
            return next();
        };
    };
    return Router;
}());
exports.Router = Router;
