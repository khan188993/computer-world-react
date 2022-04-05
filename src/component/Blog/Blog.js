import React from 'react'
import { NavLink } from 'react-router-dom'


const blog = ({blog}) => {
    const {img,title,desc,} = blog;
    return (
        <div className="single-product">
                    <div className="img" style={{backgroundImage:`url(${img})`}}>
                        <div className="overlay"></div>
                    </div>
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
    )
}

export default blog
