import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddReview: React.FC = () => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState(''); 
    const [rating, setRating] = useState('');
    const history = useHistory();
};

return ( 
    <div>
        <h1>Add Review</h1>
        <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            placeholder="Author" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            /> 
            <textarea 
            placeholder="Content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            /> 
            <input 
            type="number" 
            placeholder="Rating" 
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
            /> 
            <button type="submit">Submit</button> 
            </form> 
            </div> 
            ); 
        ; 
        
    export default AddReview;
