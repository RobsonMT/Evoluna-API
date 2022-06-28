import { Request, Response } from "express";
import clientService from "../services/client.service";

class ClientController {
  insertClient = async (req: Request, res: Response) => {
    const client = await clientService.insertClient(req);
    return res.status(201).json(client);
  };

  getClients = async (req: Request, res: Response) => {
    const clients = await clientService.getClients();
    return res.status(200).json(clients);
  };
}

export default new ClientController();
