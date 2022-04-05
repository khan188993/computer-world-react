import React,{useState} from 'react'
import blogs from '../../fakeData/blogData'
import Blog from '../../component/Blog/Blog';

const BlogsPage = () => {
    const [Blogs, setBlogs] = useState(blogs);
    console.log(Blogs);
    return (
        <section className="products py-80" id="products">
        <div className="container">
            <h2 className="section-heading">Blogs</h2>
            <div className="row">
                {
                    Blogs.length > 0 && Blogs.map((blog)=><Blog key={blog.id} blog={blog}/>)
                }
                

            </div>
        </div>
    </section>
    )
}

export default BlogsPage
