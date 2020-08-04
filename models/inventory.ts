import mongoose from "mongoose";

export interface Inventory extends mongoose.Document {
  qr_code: string;
  item_value: string;
  description: string;
  item_type: string;
  item_url: string;
}