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
    
}