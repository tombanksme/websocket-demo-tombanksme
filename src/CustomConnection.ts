import { Duplex } from 'stream';
import {
	Server,
	Connection,
	Message,
	MessageType,
	FrameInterface,
} from '@tombanksme/websockets';

export class CustomConnection extends Connection {
	/**
	 *
	 */
	protected heartbeatCount = 0;

	/**
	 * The heartbeat interval.
	 */
	protected heartbeatInterval: NodeJS.Timer;

	constructor(server: Server, sock: Duplex) {
		super(server, sock);

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
	onMessage(message: Message) {
		if (message.type == MessageType.TXT) {
			console.log(message.data.toString());
		}
	}

	/**
	 * Handle pong frame.
	 */
	onPong(frame: FrameInterface): void {
		this.heartbeatCount -= 1;
	}
}

export default CustomConnection;
