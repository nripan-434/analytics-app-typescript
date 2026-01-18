import { Router } from "express";
import { createEvent } from "../controllers/eventcontroller";

const router = Router()

router.post('/eventcreate',createEvent)

export default router