import { Duplex } from 'stream';
import { IncomingMessage } from 'http';
import { Server } from '@tombanksme/websockets';
import { Server as HTTPServer } from 'http';

import CustomConnection from './CustomConnection';

export class CustomServer extends Server {
	makeConnection(
		req: IncomingMessage,
		sock: Duplex,
		head: Buffer
	): CustomConnection {
		return new CustomConnection(this, sock);
	}
}

export default CustomServer;
