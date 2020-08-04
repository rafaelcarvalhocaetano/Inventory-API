"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var restify = __importStar(require("restify"));
var mongoose_1 = __importDefault(require("mongoose"));
var Server = /** @class */ (function () {
    function Server() {
        this.options = {
            // useCreateIndex: true,
            useMongoClient: true,
        };
    }
    // start db
    Server.prototype.initialMongoose = function () {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.set('useNewUrlParser', true);
        mongoose_1.default.set('useFindAndModify', false);
        mongoose_1.default.set('useCreateIndex', true);
        return mongoose_1.default.connect('mongodb://heroku_l11g4rr7:p20kpv4sumta9sgc14em1te27v@ds043262.mlab.com:43262/heroku_l11g4rr7');
    };
    // start router
    Server.prototype.initialRouter = function (routers) {
        var _this = this;
        return new Promise(function (resolver, reject) {
            try {
                _this.server = restify.createServer({
                    name: 'API INVENTORY',
                    version: '0.0.1'
                });
                _this.server.use(restify.plugins.bodyParser());
                _this.server.use(restify.plugins.queryParser());
                _this.server.use(restify.plugins.authorizationParser());
                // routers
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.application(_this.server);
                }
                _this.server.listen(3000, function () { return resolver(); });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    // bootstrap
    Server.prototype.initialize = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initialMongoose().then(function () { return _this.initialRouter(routers).then(function () { return _this; }); });
    };
    return Server;
}());
exports.Server = Server;
