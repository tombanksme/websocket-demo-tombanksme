"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const CustomServer_1 = __importDefault(require("./CustomServer"));
const http = (0, http_1.createServer)((req, res) => {
    // ...
});
const server = new CustomServer_1.default(http);
http.listen(8080);
