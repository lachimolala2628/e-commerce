import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';

const Product = ({ products }) => {

    const { addtoCart } = useContext(CartContext);
    const { id, title, price, category, image } = products;

    return (
        <>
            <div className='mt-[15px]'>
                <div className='border border-[#B4B4B8] h-[300px] mb-4 relative group transition'>
                    <div className='h-full w-full flex justify-center items-center'>
                        <div className='w-[180px] mx-auto flex justify-center items-center'>
                            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title} />
                        </div>
                    </div>
                    <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                        <button onClick={() => addtoCart(products, id)}>
                            <div className='flex justify-center items-center text-white w-9 h-9 bg-red-500 drop-shadow-lg'>
                                <BsPlus className='text-3xl' />
                            </div>
                        </button>
                        <Link
                            to={`/product/${id}`}
                            className='w-9 h-9 bg-white flex justify-center items-center text-primary drop-shadow-lg'
                        >
                            <BsEyeFill />
                        </Link>
                    </div>
                </div>
                <div>
                    <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
                    <Link to={`product/${id}`}>
                        <h2 className='font-semibold mb-1'>{title}</h2>
                    </Link>
                    <div className='font-semibold'>
                        $ {price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;