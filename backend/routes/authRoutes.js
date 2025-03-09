import express from "express";
import bcrypt from "bcryptjs"; // Use bcryptjs instead of bcrypt

const router = express.Router();

// Dummy Admin Credentials
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD_HASH = bcrypt.hashSync("admin123", 10); // Hash the password

// Login route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if email is admin
    if (email === ADMIN_EMAIL) {
        const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
        if (isMatch) {
            return res.json({ role: "admin", message: "Admin logged in" });
        } else {
            return res.status(401).json({ message: "Incorrect password" });
        }
    } else {
        return res.json({ role: "user", message: "User logged in" });
    }
});

export default router;
