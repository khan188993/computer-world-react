import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Review from "./pages/Review/Review";
import Error from "./pages/Error/Error";
import Blogs from "./pages/Blogs/Blogs";

function App() {
    return (
        <>
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/review" element={<Review />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
