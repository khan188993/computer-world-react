import React,{useState,useEffect} from 'react'
import ReviewCard from '../../component/ReviewCard/ReviewCard'
import './Review.css'

const Review = () => {
    //use effect review
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("review.json")
            .then((response) => response.json())
            .then((json) => setReview(json)
                
            );
    }, []);
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
