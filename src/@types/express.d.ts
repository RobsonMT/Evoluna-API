import { Professional } from "../entities";

type TValidated = Partial<Professional>;
declare global {
  namespace Express {
    interface Request {
      validated: TValidated;
    }
  }
}
