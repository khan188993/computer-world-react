import React from 'react'
import ReviewCard from '../../component/ReviewCard/ReviewCard'
import useReviews from '../../hooks/useReviews'
import './Review.css'

const Review = () => {
    //useEffect custom hooks
    const [review, setReview] = useReviews();
    return (
        <section className="review">
        <div className="container">
        <h2 className="section-heading">Client Reviews</h2>
        <div className="row">
                        {
                            review.length && (
                                review.map((review,id)=><ReviewCard review={review} key={id}/>)
                            )
                        }
                    </div>
            
        </div>
    </section>
    )
}

export default Review
