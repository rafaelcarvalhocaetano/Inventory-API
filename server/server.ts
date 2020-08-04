import * as restify from 'restify';
import mongoose from 'mongoose';
import { Router } from '../routers/router';

export class Server {

  private server: restify.Server;
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
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    return mongoose.connect('mongodb://inventorydb:q1w2e3r4@ds143738.mlab.com:43738/heroku_glgx2dmp');
  }

  // start router
  private initialRouter(routers: Router[]): Promise<any> {
    return new Promise((resolver, reject) => {
      try {

        this.server = restify.createServer({
          name: 'API INVENTORY',
          version: '0.0.1'
        });

        this.server.use(restify.plugins.bodyParser());
        this.server.use(restify.plugins.queryParser());

        // routers
        for (const router of routers) {
          router.application(this.server); 
        }
        
        this.server.listen(3000, () => resolver());
        
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