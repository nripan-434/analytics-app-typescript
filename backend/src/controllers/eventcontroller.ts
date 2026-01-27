import {Request,Response} from 'express'
import { EventModel } from '../models/eventmodel';
export const createEvent =async (req: Request, res: Response) => {
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

    const event =await EventModel.create({
        type,userId,page
    })

    return res.status(201).json({
        message: "event created"
    });
};

export const documentcount=async(req:Request,res:Response)=>{
        const count = await EventModel.countDocuments();
  res.json({ totalEvents: count });
}