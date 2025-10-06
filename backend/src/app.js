import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import catFactsRouter from "./routes/catfacts.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ allow your frontend (5173) to access backend (3000)
app.use(cors());
app.use(express.json());

app.use("/api/catfacts", catFactsRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
