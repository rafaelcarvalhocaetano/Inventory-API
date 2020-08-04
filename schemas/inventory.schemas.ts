import mongoose from 'mongoose';
import { Inventory } from '../models/inventory';


const inventorySchema = new mongoose.Schema({
  qr_code: {
    type: String,
    unique: true
  },
  item_value: {
    type: String,
  },
  description: {
    type: String
  },
  item_type: {
    type: String
  },
  item_url: {
    type: String
  }
});

export const inventoryRepository = mongoose.model<Inventory>('items', inventorySchema);