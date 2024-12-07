import mongoose, { Document} from "mongoose";

interface IReview extends Document {
    author: string;
    content: string;
    rating: number,
}
