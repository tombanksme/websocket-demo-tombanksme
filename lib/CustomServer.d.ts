/// <reference types="node" />
import { Duplex } from 'stream';
import { IncomingMessage } from 'http';
import { Server } from '@tombanksme/websockets';
import CustomConnection from './CustomConnection';
export declare class CustomServer extends Server {
    makeConnection(req: IncomingMessage, sock: Duplex, head: Buffer): CustomConnection;
}
export default CustomServer;
