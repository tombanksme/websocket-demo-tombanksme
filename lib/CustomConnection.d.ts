/// <reference types="node" />
import { Duplex } from 'stream';
import { Server, Connection, Message, FrameInterface } from '@tombanksme/websockets';
export declare class CustomConnection extends Connection {
    /**
     *
     */
    protected heartbeatCount: number;
    /**
     * The heartbeat interval.
     */
    protected heartbeatInterval: NodeJS.Timer;
    constructor(server: Server, sock: Duplex);
    /**
     * Handle message.
     *
     * @param message
     */
    onMessage(message: Message): void;
    /**
     * Handle pong frame.
     */
    onPong(frame: FrameInterface): void;
}
export default CustomConnection;
