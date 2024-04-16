import React, { useContext } from 'react';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../img/logo_ecommerce.svg';
import { SidebarContext } from '../contexts/SiderbarContext';

const Header = () => {

    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    return (

        <>
            <header className='fixed w-full z-10 transition-all bg-white shadow-md'>
                <div className='container mx-auto flex items-center justify-between h-full'>
                    <Link to='/'>
                        <img className='h-[45px] my-2' src={logo} />
                    </Link>
                    <div className='cursor-pointer flex relative' onClick={() => setIsOpen(!isOpen)}>
                        <BsBag className='text-2xl' />
                        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white 
                        flex justify-center items-center'>
                            {itemAmount}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;