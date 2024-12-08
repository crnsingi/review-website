import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddReview: React.FC = () => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState(''); 
    const [rating, setRating] = useState('');
    const history = useHistory();
}

