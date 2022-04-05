import React from 'react'

const Contact = () => {
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
            
            <div className="contact-form">
                <form action="">
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Message..." id="" cols="30" rows="10"></textarea>
                    <button type="submit" className="btn btn-square"> Submit</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact
