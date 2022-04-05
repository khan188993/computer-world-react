import React,{useState} from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
    const [Hamberger, setHamberger] = useState(false)
    return (
        <header className="header" id="header">
        <div className="container">
            <d className="hamberger d-none" onClick={()=>setHamberger(!Hamberger)}><i className="fas fa-bars"></i></d>
            <div className="logo">     
            <NavLink className="navbar-brand" to="/">
                    COMPUTER World
            </NavLink>
            </div>
            <nav>
                <ul className={Hamberger? "main-menu hamberger" :"main-menu"}>
                    <li><NavLink className={({ isActive }) =>
                                    isActive ? "width-100" : " "
                                } to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                                    isActive ? "width-100" : " "
                                } to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                                    isActive ? "width-100" : " "
                                } to="/review">Review</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                                    isActive ? "width-100" : " "
                                } to="/blogs">Blogs</NavLink></li>
                    <li><NavLink className={({ isActive }) =>
                                    isActive ? "width-100" : " "
                                } to="/contact">Contact</NavLink></li>
                    {/* <li><NavLink to="/"><i className="fas fa-search"></i></NavLink></li> */}
                </ul>
                {/* <i className="fas fa-shopping-cart"></i> */}
            </nav>
        </div>
    </header>
    )
}

export default Header
