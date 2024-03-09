import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/Bs';
import PropTypes from 'prop-types';

const Blog = ({ blog,handelSelect }) => {
    const { img, title, details, price, credit } = blog
    return (
        <div className='rounded-md bg-white p-5'>
            <img className='w-[280px] h-[144px]' src={img} alt="" />
            <h2 className='text-2xl font-semibold my-4'>{title}</h2>
            <p className='text-gray-500 text-[19px]'>{details}</p>
            <p className='mt-3 text-gray-500'><FiDollarSign style={{ display: 'inline-block' }}></FiDollarSign>Price: {price}
                <span className='ml-4 mr-2'><BsBook style={{ display: 'inline-block' }}></BsBook></span>Credit: {credit}hr
            </p>
            <button onClick={()=> handelSelect(blog)} className='bg-[#2F80ED] text-white mt-5 p-2 w-full rounded-md font-semibold text-xl'>Select</button>
        </div>
    );
};

export default Blog;
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelSelect:PropTypes.func.isRequired
};