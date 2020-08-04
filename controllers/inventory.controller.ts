import * as restify from 'restify';

import { Router } from '../routers/router';
import { inventoryRepository } from '../schemas/inventory.schemas';


class InventoryController extends Router {

  application(http: restify.Server): void {
    
    http.get('/inventory', (req, resp, next) => {
      inventoryRepository.find().then(x => {
        if (x) {
          resp.json(x);
        } else {
          resp.send(404);
        }
      });
    });

    http.get('/inventory/:id', (req, resp, next) => {
      inventoryRepository.findById(req.params.id).then(x => this.callbackRouter);
    });

    http.post('/inventory', (req, resp, next) => {
      const item = new inventoryRepository(req.body);
      item.save().then(x => this.callbackRouter);
    });

    http.put('/inventory/:id', (req, resp, next) => {
      const options = { overwrite: true };
      inventoryRepository.update({_id: req.params.id }, req.body, options).exec().then((x: any) => this.callbackRouter).then(x => {
        resp.json(x);
        return next();
      });
    });

    http.del('/inventory/:id', (req, resp, next) => {
      inventoryRepository.remove({_id: req.params.id}).exec().then(x => this.callbackRouter);
    });

  }
}

export const IInventory = new InventoryController();