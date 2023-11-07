import { Request, Response } from "express";

const db = require("../db/models")
import PasswordHash from '../utils/PasswordHash'

class Controller {
    login = async (req: Request, res: Response): Promise<Response> => {
        const { username, email, password } = req.body

        const whereFilter = (username)
            ?
            {
                username
            }
            :
            {
                email
            }


        const user = await db.user.findOne({
            where: whereFilter
        });

        if (!user) {
            return res.status(400).json({ "message": "user not found", "data": null })
        }

        const isValid = await PasswordHash.compare(password, user.password)

        if (!isValid) {
            return res.status(400).json({ "message": "password salah", "data": null })
        }

        const object = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        }

        return res.status(200).json({
            "message": "ok", "data": {
                object,
                // token
            }
        })
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        const { username, email, password } = req.body

        const passwordHashed = await PasswordHash.hash(password)

        db.user.create({ username, email, password: passwordHashed })

        return res.status(200).json({ "message": "ok", "data": null })
    }
}

export default new Controller();