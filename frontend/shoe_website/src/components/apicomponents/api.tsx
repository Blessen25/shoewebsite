import React,{ useEffect, useState } from 'react';
import './api.css';
import axios from 'axios';

const Api_component = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();

        // Extract only `id` and `title` from each object
        const filteredData = result.map((item) => ({
            id: item.id,
            title: item.title,
        }));

        setData(filteredData); // Store filtered data in state
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };
    
      useEffect(() => {
        fetchData();
      }, []);
    return (
        <>
            <h1>Api component</h1>
        </>
    )
}

export default Api_component