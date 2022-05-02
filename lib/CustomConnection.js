"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomConnection = void 0;
const websockets_1 = require("@tombanksme/websockets");
class CustomConnection extends websockets_1.Connection {
    constructor(server, sock) {
        super(server, sock);
        /**
         *
         */
        this.heartbeatCount = 0;
        this.heartbeatInterval = setInterval(() => {
            this.ping();
            this.heartbeatCount += 1;
        }, 5000);
    }
    /**
     * Handle message.
     *
     * @param message
     */
    onMessage(message) {
        if (message.type == websockets_1.MessageType.TXT) {
            console.log(message.data.toString());
        }
    }
    /**
     * Handle pong frame.
     */
    onPong(frame) {
        this.heartbeatCount -= 1;
    }
}
exports.CustomConnection = CustomConnection;
exports.default = CustomConnection;
