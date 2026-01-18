import {Request,Response} from 'express'
import { AnalyticsEvent } from '../models/eventmodel'
export const createEvent =(req:Request,res:Response)=>{
    const event :AnalyticsEvent=req.body
    console.log("recieved",event);
    return res.status(201).json({message:"event created"})

}