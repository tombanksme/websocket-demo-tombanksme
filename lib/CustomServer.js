"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomServer = void 0;
const websockets_1 = require("@tombanksme/websockets");
const CustomConnection_1 = __importDefault(require("./CustomConnection"));
class CustomServer extends websockets_1.Server {
    makeConnection(req, sock, head) {
        return new CustomConnection_1.default(this, sock);
    }
}
exports.CustomServer = CustomServer;
exports.default = CustomServer;
