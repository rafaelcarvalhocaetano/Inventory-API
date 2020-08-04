import * as restify from 'restify';

export abstract class Router {
 
  abstract application(http: restify.Server): void;

  callbackRouter(resp: restify.Response, next: restify.Next) {
    return (document: any) => {
      if (document) {
        resp.json(document);
      } else {
        resp.send(404);
      }
      return next();
    }
  }
  
}