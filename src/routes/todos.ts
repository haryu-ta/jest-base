import { Router } from "express";
import { createTodo,getTodo,changeTodo,deleteTodo,getIds } from "../controllers/TodoController"

const router = Router();

router.post('/',createTodo);
router.get('/',getTodo);
router.patch('/:id',changeTodo);
router.delete('/:id',deleteTodo);
router.get('/ids',getIds);

export default router;