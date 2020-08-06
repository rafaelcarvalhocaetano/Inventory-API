import mongoose from 'mongoose';

export const InventorySchema = new mongoose.Schema({
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
