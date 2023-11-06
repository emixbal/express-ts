import { Request, Response } from "express";
const db = require("../db/models")

class Controller {
    login(req: Request, res: Response): Response {
        return res.status(200).json({ "message": "ok", "data": req.body })
    }
    register(req: Request, res: Response): Response {
        const { username, email, password } = req.body

        const user = db.user.create({ username, email, password })

        return res.status(200).json({ "message": "ok", "data": req.body })
    }
}

export default new Controller();