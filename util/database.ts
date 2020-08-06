import mongoose from 'mongoose';
import { environment } from '../environment/environment';

export class Database {

  private options = { 
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  };

  public createConnection(): void {
    mongoose.connect(environment.DATABASE, this.options);
  }

}