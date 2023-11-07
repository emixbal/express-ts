import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
    console.log(req.body);
    console.log("middleware hit");

    return next()
} 