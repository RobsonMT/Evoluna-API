import { Client, Professional } from "../entities";

declare global {
  namespace Express {
    interface Request {
      validated: any;
      professional: Professional | null;
    }
  }
}
