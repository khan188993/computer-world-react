import React from 'react'
import { NavLink } from 'react-router-dom';
import HeroImgF from '../../assets/hero.png';

const Hero = () => {
    return (
        <section className="hero" id="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Start your Journey With best product</h1>
                <p>We always try to serve our best product to our customer.our product quality always will pretty
                    much clean and fresh.just try for one time</p>
                <NavLink className="btn" to="/products">Prebook now <i className="fas fa-arrow-right"></i></NavLink>
            </div>
            <div className="hero-img">
                <img src={HeroImgF} alt="Leptop"/>
            </div>
        </div>
    </section>
    )
}

export default Hero
