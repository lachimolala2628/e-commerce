import React from 'react';
import womenImg from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section className='h-[775px] bg-hero bg-cover bg-no-repeat bg-center border-none outline-none py-24'>
                <div className="container mx-auto flex justify-around h-full">
                    <div className='flex flex-col justify-center'>
                        <div className='font-semibold uppercase'>
                            <div className='flex items-center'>
                                <div className='w-10 h-[2px] bg-black mr-3'>
                                </div>
                                New Trend
                            </div>
                            <h1 className='text-[65px] leading-[1.1] mb-4 font-light'>AUTUMN SAlE STYLISH <br /> <span className='font-semibold'>WOMEN'S</span></h1>
                            <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <img src={womenImg} alt='women-img' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;