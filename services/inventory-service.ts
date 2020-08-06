import { IInventory } from "../repository/IInventory";
import { Inventory } from "../models/inventory";
import { InventoryRepository } from "../repository/inventoryRepository";


class IService implements IInventory {

  async findAllInventory() {
    const data = await InventoryRepository.find();
    return data;
  }

  async findByIdInventory(_id: string) {
    const data = await InventoryRepository.findById({_id: _id});
    return data;
  }

  async createInventory(data: Inventory) {
    const item = await InventoryRepository.create(data);
    return item;
  }

  async updateInventory(_id: string, inventory: Inventory) {
    const data = await InventoryRepository.findByIdAndUpdate(_id, inventory);
    return data;
  }

  async deleteByIdInventory(_id: string) {
    const data = await InventoryRepository.findByIdAndRemove(_id);
    return data;
  }

}

export const InventoryService = new IService();