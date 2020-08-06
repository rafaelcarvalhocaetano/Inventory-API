import express from 'express';
import bodyParser from 'body-parser'; 
import cors from 'cors'; 

import { Database } from './util/database';
import { InventoryController } from './controllers/inventory.controller';

export class Server {

  public app: express.Application;
  private database: Database;

  constructor() {
    this.app = express();
    this.database = new Database();
    this.database.createConnection();
    this.middler();
    this.routes();
  }

  private enabledCors() {
    const options: cors.CorsOptions = {
      methods: 'GET, OPTIONS, PUT, POST, DELETE',
      origin: '*'
    };
    this.app.use(cors(options));
  }

  private middler() {
    this.enabledCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }



  routes() {
    this.app.route('/').get((req, resp) => {
      resp.send({ message: 'FOI' });
    });

    this.app.route('/api/v1/inventory').get(InventoryController.findAll);
    this.app.route('/api/v1/inventory/:id').get(InventoryController.findById);
    this.app.route('/api/v1/inventory').post(InventoryController.create);
    this.app.route('/api/v1/inventory/:id').put(InventoryController.update);
    this.app.route('/api/v1/inventory/:id').delete(InventoryController.delete);
  }
}