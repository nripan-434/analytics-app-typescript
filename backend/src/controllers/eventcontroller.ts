import {Request,Response} from 'express'
import { AnalyticsEvent } from '../models/eventmodel'
export const createEvent = (req: Request, res: Response) => {
    const { type, userId, page } = req.body;

    if (!type || !userId || !page) {
        return res.status(400).json({
            error: "Invalid event payload"
        });
    }

    if (type !== "page_view") {
        return res.status(400).json({
            error: "Unsupported event type"
        });
    }

    console.log("received", { type, userId, page });

    return res.status(201).json({
        message: "event created"
    });
};
