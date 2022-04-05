import React from 'react'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <span className="logo">Computer World</span>
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav ms-auto">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "red nav-link" : "nav-link"
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "red nav-link" : "nav-link"
                                }
                                to="/review"
                            >
                                review
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "red nav-link" : "nav-link"
                                }
                                to="/dashboard"
                            >
                                dashboard
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "red nav-link" : "nav-link"
                                }
                                to="/blogs"
                            >
                                blogs
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
