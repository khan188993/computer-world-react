import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewCard = ({ review }) => {
    const { name, desc, rating,img,title } = review;
    
    //Review Stars Count
    let reviewStars = [];
    for(let i = 1; i<= rating;i++){
        reviewStars = [...reviewStars,'star']
    }

    return (
            <div className="single-review">
                <img src={img} alt="review" />
                <div className="content">
                    <h3>{name}</h3>
                    <span class="title">{title}</span>
                    <div className="rating">
                        {
                            reviewStars.length > 0 && reviewStars.map(()=><FontAwesomeIcon icon={faStar} />)
                        }
                        <span>{rating}</span>
                    </div>
                    <p className="desc">
                        {desc}
                    </p>
                </div>
            </div>
    );
};

export default ReviewCard;
