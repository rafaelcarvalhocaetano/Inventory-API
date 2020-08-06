import mongoose from 'mongoose';
import { InventorySchema  } from '../schemas/inventory.schemas';


interface IRepository extends mongoose.Document {
  qr_code: string;
  item_value: string;
  description: string;
  item_type: string;
  item_url: string;
}

export const InventoryRepository = mongoose.model<IRepository>('items', InventorySchema);
