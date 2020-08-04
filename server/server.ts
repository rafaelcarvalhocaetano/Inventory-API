import * as restify from 'restify';
import mongoose from 'mongoose';
import { Router } from '../routers/router';

export class Server {

  private options = {
    // useCreateIndex: true,
    // useMongoClient: true,
    // useNewUrlParser: true,
    // useFindAndModify: true,
    // useUnifiedTopology: true,
  };


  // start db
  private initialMongoose() {
    (mongoose as any).Promise = global.Promise;
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true);
    // mongoose.set('useMongoClient', true);
    return mongoose.connect('mongodb://heroku_l11g4rr7:p20kpv4sumta9sgc14em1te27v@ds043262.mlab.com:43262/heroku_l11g4rr7');
  }
  // start router
  private initialRouter(routers: Router[]): Promise<any> {
    return new Promise((resolver, reject) => {
      try {

        let server: restify.Server;

        server = restify.createServer({
          name: 'API INVENTORY',
          version: '0.0.1'
        });

        server.use(restify.plugins.bodyParser());
        server.use(restify.plugins.queryParser());
        server.use(restify.plugins.authorizationParser());

        // routers
        for (const router of routers) {
          router.application(server); 
        }
        
        server.listen(3000, () => resolver());
        
      } catch (e) {
        reject(e);
      }
    });
  }


  // bootstrap
  public initialize(routers: Router[] = []): Promise<any> {
    return this.initialMongoose().then(() => this.initialRouter(routers).then(() => this));
  }

}
