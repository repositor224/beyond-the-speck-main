import mongoose, { Schema } from "mongoose";

const complaintSchema = new Schema({
  locality: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  issueType: {
    type: String,
    require: true,
  },
  issueDescription: {
    type: String,
    require: true,
  },
  latitude: {
    type: Number,
    require: true,
  },
  longitude: {
    type: Number,
    require: true,
  },
  mapAPI: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: Number,
    require: true,
  },
});

export const Complaint = mongoose.model("Complaint", complaintSchema);
