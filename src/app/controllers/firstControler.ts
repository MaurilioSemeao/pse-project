import { Request, Response } from 'express';
import information from '../repositores/DataProcessing/ProcessingDatas';

class FirstController {
  public index(req: Request, res: Response) {
    res.send(JSON.stringify(information));
  }
}

export default new FirstController();
