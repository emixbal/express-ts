import BaseRoutes from './BaseRoutes'

import TodoController from "../controllers/TodoController";
import { isAuth } from "../middlewares/AuthMiddleware";

class Routes extends BaseRoutes {
    public routes(): void {
        this.router.get('/', isAuth, TodoController.index)
        this.router.get('/:id', TodoController.show)
        this.router.post('/', TodoController.create)
        this.router.put('/:id', TodoController.update)
        this.router.delete('/:id', TodoController.delete)
    }
}

export default new Routes().router;