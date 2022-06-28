import { Client, Professional } from "../entities";

// type TValidated = Partial<Professional> | Partial<Client>;
declare global {
  namespace Express {
    interface Request {
      validated: any;
    }
  }
}
