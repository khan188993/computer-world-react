import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/MyApp.css";
import "./css/responsive.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Review from "./pages/Review/Review";
import Error from "./pages/Error/Error";
import Blogs from "./pages/BlogPage/BlogPage";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/review" element={<Review />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/Contact" element={<ContactUs />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
