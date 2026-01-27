import { Router } from "express";
import { createEvent,documentcount } from "../controllers/eventcontroller";

const router = Router()

router.post('/eventcreate',createEvent)
router.get('/documentcount',documentcount)

export default router
