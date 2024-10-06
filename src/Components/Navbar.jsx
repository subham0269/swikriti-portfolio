import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component loads
        setTimeout(() => setIsVisible(true), 100)
    }, []);

    return (
        <nav
            className={`flex justify-between items-center lg:px-32 py-4 bg-[#F0EDE6] transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            } px-4 md:px-0`}
        >
            <p className="font-semibold text-sm md:text-xl font-epilogue text-[#2D2D2D]">Swikriti Majumder</p>
            <ul className="space-x-6 text-md font-epilogue text-[#2D2D2D] hidden md:flex">
                <li>About</li>
                <li>Work</li>
                <li>Personal Details</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
