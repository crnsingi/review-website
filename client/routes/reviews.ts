import express from "express";
const router = express.Router();
import Review from "../models/Review";

router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/reviews', async (req, res) =>{
    const review = new Review({
        author: req.body.author,
        content: req.body.content,
        rating: req.body.rating,
    });

    try { 
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
})

export default router;



