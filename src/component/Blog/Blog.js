import React from 'react'
import { NavLink } from 'react-router-dom'


const blog = ({blog}) => {
    return (
        <div className="single-product">
                    <div className="img" style={{backgroundImage:`url(${blog?.img})`}}>
                        <div className="overlay"></div>
                    </div>
                    <div className="content">
                        <h3>{blog?.title}</h3>
                        <p>{blog?.desc.length > 30 ? blog?.desc.split(0,30):blog?.desc}</p>
                        {/* eita click krte single route run hobe */}
                        <NavLink to="blogs" className='btn btn-square'>Read More</NavLink>
                    </div>
                </div>
    )
}

export default blog
