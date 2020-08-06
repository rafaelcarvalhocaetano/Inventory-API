import { Server } from './server';
import { environment } from './environment/environment';

const server = new Server();
server.app.listen(environment.PORT, () => console.log(' API - INVENTORY '));