import React from "react";
import "./Home.css";
import Hero from "../../component/Hero/Hero";
import Blogs from "../../component/Blogs/Blogs";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Reviews from "../../component/Reviews/Reviews";

const Home = () => {

    return (
        <>
            <Hero/>
            <Reviews/>
            <Blogs/>
            <Contact/>
 
        </>
    );
};

export default Home;
