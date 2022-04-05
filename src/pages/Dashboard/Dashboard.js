import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <section className="contact py-60" id="contact">
        <h1 className="section-heading">Contact Us</h1>
        <div className="container">
            <div className="contact-box">
                <div className="single-box">
                    <i className="fab fa-whatsapp"></i>
                    <h3>Call On Whats App</h3>
                    <span>+880 1631512541 </span>
                </div>
                <div className="single-box">
                    <i className="fas fa-envelope"></i>
                    <h3>Email Us At</h3>
                    <span>a.k188993@gmail.com</span>
                </div>
                <div className="single-box">
                    <i className="fas fa-home"></i>
                    <h3>Visit Office </h3>
                    <span>72/1 S K Das Road, Gandaria, Puran Dhaka Bangladesh</span>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Dashboard
