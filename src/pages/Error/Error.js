import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error.css'

const Error = () => {
    const navigation = useNavigate();
    return (
        <section className="error text-center">
            <h1 className='section-heading'>404 : Page Not Found</h1>
            <button className='btn btn-square' onClick={()=>navigation("/")}>Back To Home</button>
    </section>
    )
}

export default Error
