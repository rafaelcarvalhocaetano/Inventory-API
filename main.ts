import { Server } from './server';

const server = new Server();
server.app.listen(process.env.PORT, () => console.log(' API - INVENTORY '));