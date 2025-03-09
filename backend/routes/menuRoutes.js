import express from "express";
import { Menu } from "../models/menu.js"; // Import the Menu model

const router = express.Router();

// ✅ Route to get all menu items
router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching menu" });
  }
});

// ✅ Route to add a new menu item
router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, imageUrl } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ message: "Name, price, and category are required" });
    }

    const newMenuItem = new Menu({ name, description, price, category, imageUrl });
    await newMenuItem.save();

    res.status(201).json({ message: "Menu item added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error while adding menu item" });
  }
});

// ✅ Route to delete a menu item by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Menu.findByIdAndDelete(id);
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error while deleting menu item" });
  }
});

export default router;
