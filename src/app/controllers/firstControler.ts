import { Request, Response } from 'express';
import residenciQuantidad from '../repositores/ResidenciQuantidade';
import Information from '../repositores/ExportInformatino';

class FirstController {
  public index(req: Request, res: Response) {
    res.send(JSON.stringify(Information));
  }
}

export default new FirstController();
