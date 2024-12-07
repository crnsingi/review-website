import express from "express";
const router = express.Router();
import Review from "../models/Review";

router.get('/review', async (req, res) => {
    try{
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



