import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reservationRoutes from "./routes/reservationRoute.js";
import menuRoutes from "./routes/menuRoutes.js"; // Import menu routes

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

const mongoURI = process.env.MONGODB_URL;
const port = process.env.PORT || 4000;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.use("/reservation", reservationRoutes);
app.use("/menu", menuRoutes); // Add this line

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
