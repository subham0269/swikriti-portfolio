import { useState, useEffect } from 'react';

import { Cross as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [animate, setAnimate] = useState(false);

    const toggleMenu = () => {
        if (open) {
            // Exit animation, re-enable scrolling
            setAnimate(false);
            document.body.style.overflow = 'auto'; // Allow scrolling again
            setTimeout(() => setOpen(false), 700); // Delay to let the animation finish
        } else {
            // Open the menu, disable scrolling
            setOpen(true);
            document.body.style.overflow = 'hidden'; // Disable scrolling
            setTimeout(() => setAnimate(true), 10); // Slight delay to allow animation class to apply
        }
    };

    useEffect(() => {
        // Trigger the animation when the component loads
        setTimeout(() => setIsVisible(true), 100)
    }, []);

    return (
        <>
            <nav
                className={`z-50 flex justify-between items-center lg:px-32 py-2 md:py-4 bg-[#F0EDE6] transition-all duration-700 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                } px-4 md:px-0`}
            >
                <p className="font-semibold text-sm md:text-xl font-epilogue text-[#2D2D2D]">Swikriti Majumder</p>
                <ul className="space-x-6 text-md font-epilogue text-[#2D2D2D] hidden md:flex">
                    <li>
                        <a className='m-0 p-0 peer' href='#about'>About</a>
                        <div className='h-0.5 bg-[#afaeab] w-0 peer-hover:w-full transition-all duration-300' />
                    </li>
                    <li>
                        <a className='peer m-0 p-0' href='#work'>Work</a>
                        <div className='h-0.5 bg-[#afaeab] w-0 peer-hover:w-full transition-all duration-300' />
                    </li>
                    <li>
                        <a className='peer m-0 p-0' href='#personal'>Personal Details</a>
                        <div className='h-0.5 bg-[#afaeab] w-0 peer-hover:w-full transition-all duration-300' />
                    </li>
                    <li>
                        <a className='peer m-0 p-0' href='#contact'>Contact</a>
                        <div className='h-0.5 bg-[#afaeab] w-0 peer-hover:w-full transition-all duration-300' />
                    </li>
                </ul>
                <button onClick={toggleMenu} className='inline-block md:hidden'>
                    <Hamburger toggled={open} color="#4f4f4f" />
                </button>            
            </nav>
            {open && (
                <div
                    className={`fixed z-50 bg-[#F0EDE6]/80 backdrop-blur-lg flex flex-col justify-center items-center transition-transform duration-700 ease-in-out w-full h-full ${
                        animate ? 'translate-y-0' : '-translate-y-full'
                    }`}
                >
                    <ul className="space-y-8 text-2xl font-epilogue text-[#2D2D2D]">
                        <li>
                            <a href='#about' onClick={toggleMenu}>About</a>
                        </li>
                        <li>
                            <a href='#work' onClick={toggleMenu}>Work</a>
                        </li>
                        <li>
                            <a href='#personal' onClick={toggleMenu}>Personal Details</a>
                        </li>
                        <li>
                            <a href='#contact' onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
            
        </>
    );
};

export default Navbar;
