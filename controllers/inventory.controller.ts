import { InventoryService } from "../services/inventory-service";
import HttpStatus from 'http-status';
import { Response } from "../util/response";

class IController {

  async findAll(req, resp) {
    try {
      const data = await InventoryService.findAllInventory();
      Response.sendResponse(resp, HttpStatus.OK, data);
    } catch (e) {
      console.error.bind(console, `DEU RUIM ${e}`)
    }
  }

  async findById(req, resp) {
    try {
      const data = await InventoryService.findByIdInventory(req.params.id);
      Response.sendResponse(resp, HttpStatus.OK, data)
    } catch (e) {
      console.error.bind(console, `DEU RUIM ${e}`)
    }
  }

  async create(req, resp) {
    try {
      const data = await InventoryService.createInventory(req.body);
      Response.sendResponse(resp, HttpStatus.OK, 'Item Cadastro com sucesso!!!!');
    } catch (e) {
      console.error.bind(console, `DEU RUIM ${e}`)
    }
  }

  async update(req, resp) {
    try {
      const data = await InventoryService.updateInventory(req.params.id, req.body);
      Response.sendResponse(resp, HttpStatus.OK, data)
    } catch (e) {
      console.error.bind(console, `DEU RUIM ${e}`)
    }
  }

  async delete(req, resp) {
    try {
      const data = await InventoryService.deleteByIdInventory(req.params.id);
      Response.sendResponse(resp, HttpStatus.OK, 'Item deletado....');
    } catch (e) {
      console.error.bind(console, `DEU RUIM ${e}`)
    }
  }
}

export const InventoryController = new IController();