import React from "react";

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
                            reviewStars.length > 0 && reviewStars.map(()=><i className="fas fa-star"></i>)
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
