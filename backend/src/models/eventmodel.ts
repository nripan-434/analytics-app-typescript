import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["page_view"],
    },
    userId: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const EventModel = model("Event", eventSchema);
