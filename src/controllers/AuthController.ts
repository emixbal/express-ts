import { Request, Response } from "express";

class Controller {
    login(req: Request, res: Response): Response {
        return res.status(200).json({ "message": "ok", "data": req.body })
    }
    register(req: Request, res: Response): Response {
        return res.status(200).json({ "message": "ok", "data": req.body })
    }
}

export default new Controller();