import mongoose, { Document} from "mongoose";

interface IReview extends Document {
    author: string;
    content: string;
    rating: number,
}

const reviewSchema = new mongoose.Schema({
    author: { type: String, required: true},
    content: { type: String, required: true},
    rating: { type: Number, required: true},
});