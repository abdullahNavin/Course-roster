import PropTypes from 'prop-types';

const Cart = ({ AllSelect, count,remaing }) => {

    return (
        <div className='bg-white p-4 rounded-lg'>
            <div className='py-4 border-b-2'>
                <h2 className='text-2xl font-bold text-[#2F80ED]'>Credit Hour Remaining {remaing} hr</h2>
            </div>
            <div className='border-b-2'>
                <h3 className='text-3xl font-bold pt-2'>Course Name: {AllSelect.length}</h3>
                <div className='my-6'>
                    {
                        AllSelect.map(item => <li className='text-xl text-gray-500 ' key={item.id}>{item.title}</li>)
                    }
                </div>
            </div>
            <div>
                <h4 className='text-gray-500 text-xl font-bold'>Total Credit Hour : {count}</h4>
            </div>
        </div>
    );
};

export default Cart;
Cart.propTypes = {
    AllSelect: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    remaing: PropTypes.number.isRequired
}