import { createServer } from 'http';

import CustomServer from './CustomServer';

const http = createServer((req, res) => {
	// ...
});

const server = new CustomServer(http);

http.listen(8080);
