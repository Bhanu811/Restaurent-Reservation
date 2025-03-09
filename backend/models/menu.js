import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

export const Menu = mongoose.model("Menu", menuSchema);
