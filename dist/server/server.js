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
const restify = __importStar(require("restify"));
const mongoose_1 = __importDefault(require("mongoose"));
class Server {
    constructor() {
        this.options = {
        // useCreateIndex: true,
        // useMongoClient: true,
        // useNewUrlParser: true,
        // useFindAndModify: true,
        // useUnifiedTopology: true,
        };
    }
    // start db
    initialMongoose() {
        mongoose_1.default.Promise = global.Promise;
        // mongoose.set('useNewUrlParser', true);
        // mongoose.set('useFindAndModify', false);
        // mongoose.set('useCreateIndex', true);
        // mongoose.set('useMongoClient', true);
        return mongoose_1.default.connect('mongodb://heroku_l11g4rr7:p20kpv4sumta9sgc14em1te27v@ds043262.mlab.com:43262/heroku_l11g4rr7');
    }
    // start router
    initialRouter(routers) {
        return new Promise((resolver, reject) => {
            try {
                let server;
                server = restify.createServer({
                    name: 'API INVENTORY',
                    version: '0.0.1'
                });
                server.use(restify.plugins.bodyParser());
                server.use(restify.plugins.queryParser());
                server.use(restify.plugins.authorizationParser());
                // routers
                for (const router of routers) {
                    router.application(server);
                }
                server.listen(3000, () => resolver());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    // bootstrap
    initialize(routers = []) {
        return this.initialMongoose().then(() => this.initialRouter(routers).then(() => this));
    }
}
exports.Server = Server;
