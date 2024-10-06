import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation when the component loads
        setTimeout(() => setIsVisible(true), 100)
    }, []);

    return (
        <div
            className={`flex justify-between items-center lg:px-20 py-5 bg-[#F0EDE6] transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
            <p className="font-semibold text-xl font-epilogue">Swikriti Majumder</p>
            <ul className="space-x-6 text-md flex font-epilogue">
                <li>About</li>
                <li>Work</li>
                <li>Personal Details</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;
