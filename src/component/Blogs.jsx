import Blog from "./Blog"
import PropTypes from 'prop-types'

const Blogs = ({ allBlogs, handelSelect }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                allBlogs.map(blog => <Blog
                    handelSelect={handelSelect}
                    key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;
Blogs.propTypes = {
    allBlogs: PropTypes.array.isRequired,
    handelSelect:PropTypes.func.isRequired
}