import React,{useState} from 'react'
import blogs from '../../fakeData/blogData'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [Blogs, setBlogs] = useState(blogs);
    console.log(Blogs);
    return (
        <section className="products py-80" id="products">
        <div className="container">
            <h2 className="section-heading">Popular Collection</h2>
            <div className="row">
                {
                    Blogs.length > 0 && Blogs.map((blog)=><Blog key={blog.id} blog={blog}/>)
                }
                

            </div>
            <div className="see-more">
                <a className="btn btn-text" href="#">See More<i className="fas fa-arrow-right"></i> </a>
            </div>
        </div>
    </section>
    )
}

export default Blogs
