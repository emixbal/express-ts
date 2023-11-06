import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import cors from "cors"

import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins()
        this.routes()
    }

    protected plugins(): void {
        this.app.use(bodyParser.json())
        this.app.use(morgan("dev"))
        this.app.use(compression())
        this.app.use(helmet())
        this.app.use(cors())
    }

    protected routes(): void {
        this.app.use('/users', UserRoutes)
        this.app.use('/auth', AuthRoutes)
    }
}

const port: number = 1111;
const app = new App().app;

app.listen(port, () => {
    console.log(`app run in ${port}`);
})