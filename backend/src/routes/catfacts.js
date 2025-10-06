import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://catfact.ninja/fact");
        res.json(response.data); // send the API response back to frontend
    } catch (error) {
        console.error("Error fetching cat fact:", error.message);
        res.status(500).json({ message: "Failed to fetch cat fact" });
    }
});

export default router;
