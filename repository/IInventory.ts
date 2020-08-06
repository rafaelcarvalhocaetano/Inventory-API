import { Inventory } from "../models/inventory";

export interface IInventory {
  
  findAllInventory(): void;
  findByIdInventory(_id: string): void;
  createInventory(data: Inventory): void;
  updateInventory(_id: string, data: Inventory): void;
  deleteByIdInventory(_id: string): void;

}