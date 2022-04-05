import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {

    //useEffect custom hooks
    const [review, setReview] = useReviews();
    let navigate = useNavigate();

    //Review Showing 3 if more than 3 
    let newReviews = [];
    if(review.length > 4){
        newReviews = review.slice(0,3);
    }else{
        newReviews = review;
    }

    return (
        <section className="review py-80" id="review">
        <div className="container">
                <h1 className="section-heading">Cutomer Review - {review?.length}</h1>
            <div className="row">
                {
                    review.length && (
                        newReviews.map((review,id)=><ReviewCard review={review} key={id}/>)
                    )
                }
            </div>
                <div className="text-center">
                <button className="btn btn-square"
                    onClick={() => {
                        navigate("/review");
                    }}
                >
                    See More
                </button>
                </div>
        </div>
        <div />
    </section>
    )
}

export default Reviews
