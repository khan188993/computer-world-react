import React from 'react'
import {useParams } from "react-router-dom";

const BlogDetails = () => {
    console.log(useParams());
    return (
        <div>
            blog DEtails
        </div>
    )
}

export default BlogDetails
