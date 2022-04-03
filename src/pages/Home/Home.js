import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import heroImg from "../../assets/hero.png";
import ReviewCard from "../../component/ReviewCard/ReviewCard";

const Home = () => {
    const [review, setReview] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        fetch("review.json")
            .then((response) => response.json())
            .then((json) => setReview(json)
                
            );
    }, []);
   
    return (
        <>
            <div id="hero">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-7 col-12">
                            <div className="content">
                                <h1>
                                    Find The Best Leptop
                                    <br /> For Yourself
                                </h1>
                                <p>
                                
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Architecto, libero?
                                </p>
                                <button className="btn btn-danger">
                                    Live Demo
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <img src={heroImg} alt="leptop" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="review">
                <div className="container">
                    <div className="section-title">
                        <h1 className="text-center">Cutomer Review - {review?.length}</h1>
                    </div>
                    <div className="row">
                        {
                            review.length && (
                                review.map((review,id)=><ReviewCard key={id}/>)
                            )
                        }
                    </div>
                    <div className="see-more text-center">
                        <button
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
        </>
    );
};

export default Home;
