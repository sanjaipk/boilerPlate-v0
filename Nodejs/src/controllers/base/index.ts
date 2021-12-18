import { Response, Request } from "express";

const getBase = async (req: Request, res: Response): Promise<void> => {
    try {
      res.status(200).json({ info: 'Node.js, Express, and Postgres API'  });
    } catch (error) {
      throw error;
    }
};
export {getBase };
  