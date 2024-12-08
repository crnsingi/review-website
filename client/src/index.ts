// Basic express server ;

import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import reviewRoutes from './routes/reviews'; 
app.use('/api', reviewRoutes);


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/review-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


