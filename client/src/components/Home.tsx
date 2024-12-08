import React, {useEffect, useState} from "react";
import axios  from "axios";
import { Link } from "react-router-dom";

interface Review { 
    author: string;
    content: string;
    rating: number;
    _id: string;
}

const Home: React.FC = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const res = await axios.get('/api/reviews');
            setReviews(res.data);
        };

        fetchReviews();
    }, []);

    return ( 
        <div>
            <h1>Reviews</h1>
            <Link to="add-reviews">Add Review</Link>
            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        {review.author}: {review.content} ({review.rating}/5)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;